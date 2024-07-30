---
title: Using 11ty and DecapCMS for 'non-blog' static websites -pt 1 Menus
date: "5/24"
category: "JS"
---

### Also posted to Dev.To

[https://dev.to/ayush_saran/using-11ty-and-decapcms-for-non-blog-static-websites-pt-1-menus-1mof](https://dev.to/ayush_saran/using-11ty-and-decapcms-for-non-blog-static-websites-pt-1-menus-1mof)

While there are plenty of examples for using 11ty and Decap CMS in blog settings, I struggled to find a way to make it work for a non-blog static website.

Leaving these tips out on the internet for anybody else looking to do the same.

## Making Menus editable in DecapCMS

To make menus that you can edit and update in DecapCMS you need to start with a collection in your config.yml file for DecapCmS [found under admin/config.yml]

mine looked like this:

```js
collections:
  - name: Menus
    label: Menus
    files:
      - file: _data/mainMenu.json
        label: Main Navigation
        name: main-navigation
        extension: "json"
        format: "json"
        fields:
          - label: Primary Menu Items
            name: nav_items
            widget: list
            fields:
              - { label: Label, name: label, widget: string }
              - { label: Path, name: path, widget: string }
```

The menu items are saved in a JSON file (mainMenu.json) as an object

```json
{
  "nav_items": [
    {
      "label": "Products",
      "path": "/products"
    },
    {
      "label": "Solutions",
      "path": "/solutions"
    },
    {
      "label": "Success Stories",
      "path": "/successStories"
    },
    {
      "label": "Resources",
      "path": "/resources"
    },
    {
      "label": "About",
      "path": "/about"
    }
  ]
}
```

The file is placed in the '\_data' directory in the root of the 11ty folder. This makes it accessible in templates as a Global Data File. [See 11ty - Global Data Files](https://www.11ty.dev/docs/data-global/)

Then inside your template you can access this array and loop over the entries to output your links. I use EJS in my template, it looks like this:

```html
<ul class="menu">
  <!-- Load Nav items from mainMenu.json file -->
  <% for (let i=0; i < mainMenu.nav_items.length; i++) { %>
  <li>
    <a href="<%= mainMenu.nav_items[i].path %>">
      <%= mainMenu.nav_items[i].label %>
    </a>
  </li>
  <% } %>
</ul>
```

You can also use this for Mega Menus, with nested lists

```js
collections:
 - file: _data/footerMenu.json
        label: Footer Links
        name: footer-navigation
        extension: "json"
        format: "json"
        fields:
          - label: Footer Menu Items
            name: nav_items
            widget: list
            fields:
              - { label: Label, name: label, widget: string }
              - label: Links
                name: links
                widget: list
                fields:
                  - { label: Label, name: label, widget: string }
                  - { label: Path, name: path, widget: string }
```

_Notice the nested 'fields:' arrays in two levels_

Then loop over them like this:

```html
<% for (let i=0; i < footerMenu.nav_items.length; i++) { %>
<ul class="footer-links">
  <li class="title">
    <h5><%= footerMenu.nav_items[i].label %></h5>
  </li>
  <% for (let j=0; j < footerMenu.nav_items[i].links.length; j++) { %>
  <li>
    <a href="<%= footerMenu.nav_items[i].links[j].path %>">
      <%= footerMenu.nav_items[i].links[j].label %>
    </a>
  </li>
  <% } %>
</ul>
<% } %>
```
