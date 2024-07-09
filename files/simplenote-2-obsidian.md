# Building A SimpleNote to Obsidian notes converter

# See it in action:

https://simplenote-to-obsidian.fly.dev/

[![https://simplenote-to-obsidian.fly.dev/](https://github.com/ayushsaranGithuB/simplenote-to-obsidian/assets/112019897/a3e65e5b-a9a3-4715-9d71-3f59418d6a82)](https://simplenote-to-obsidian.fly.dev/)

# WHY?

I like quickly jotting down notes in SimpleNote but after seeing [Obsidian](https://obsidian.md) pop up all over the web I was curious and decided to try it out. And I liked it, the ability to add more structure and link documents seemed like a great way to build up to a longer post by referencing snippets and sections that I had saved up as un-related notes in SimpleNote.

## The problem

SimpleNotes saves notes in .txt files and while it's easy to export out of SimpleNotes there's no direct way to transfer the notes over to Obsidian.

I tried looking into the official migration guide at: https://help.obsidian.md/import

I even tried looking for community plugins that would handle this: https://obsidian.md/plugins

It seemed bizarre that there was no official way to import from SimpleNotes, which is quite a popular platform. Then I stumbled across this python script from https://github.com/philgyford/simplenote-to-obsidian/blob/main/convert_notes.py and decided to build my own web version in JavaScript.

# HOW IT WORKS

1. Upload the JSON file from SimpleNote that contains an export of all the notes
2. Parse each note and convert the Tags into Obsidian compatible #Tags
3. Export this updated note into its own .md file
4. Change the modified date to reflect the date from the original SimpleNote file
5. Save these .md notes into a folder
6. Create a Zip for export that can be downloaded to import into Obsidian

# The stack

Usually I'd build this in NEXT.js and host it on Vercel but having recently run into a API route timeout I knew that Vercel allows only ~5-10 seconds for script execution in API routes (on the Hobby Tier) and I was worried that parsing the notes could take some time in larger collections so I built this as a simple Node + Express App and decided to try hosting it on Fly.io

It wasn't AS easy as connecting a github repo to Vercel, but within 20 mins I had my account setup on fly.io and the app deployed

# Challenges

### File Upload in Express v4

I just couldnt get the uploaded file through to the controller. The POST data from the form looked okay on the front-end and all my code looked ok on the Express end but any calls to req.body came up as an empty object {}!

I cracked my head around this for an hour before stumbling across this StackOverflow post where a kind poster pointed out that file uploads in forms are no longer handled by Express as of v4 and require an external library. I went with 'express-fileupload' https://www.npmjs.com/package/express-fileupload

### Creation Date

There is a function to update the 'Modified by' and 'Last Accessed' date in 'fs' for node that works across platforms but changing the 'Created At' date is trickier.

The fs-futimessync function does not handle 'Created At' dates https://www.geeksforgeeks.org/node-js-fs-futimessync-method/?ref=lbp

I did stumble upon https://github.com/baileyherbert/utimes. A Cross-platform native addon to change the btime, mtime, and atime of files in Node.js. It seems to fix the issue for Win + Mac systems so I might give it a try for the next iteration of this tool

# Finally...

And that's it. I was finally able to build the tool and test it and it works great! I was able to import all my SimpleNote data into Obsidian easily and the tags were preserved

# See it in action:

https://simplenote-to-obsidian.fly.dev/

[![https://simplenote-to-obsidian.fly.dev/](https://github.com/ayushsaranGithuB/simplenote-to-obsidian/assets/112019897/a3e65e5b-a9a3-4715-9d71-3f59418d6a82)](https://simplenote-to-obsidian.fly.dev/)

Give it a go and let me know if it helps you.

# + BONUS

I've shared the tool as a github-repo for other people to mess around with https://github.com/ayushsaranGithuB/simplenote-to-obsidian

Comments, criticisms, suggestions are welcome Please file an issue if you find a bug: https://github.com/ayushsaranGithuB/simplenote-to-obsidian/issues
