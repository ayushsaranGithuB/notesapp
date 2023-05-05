import Link from "next/link";


const NavBar = ({current}) => {
    return (
        <nav>
          <ul>
            <li><a href="/" className={(current == 'home') ? "selected" : ''}> ALL</a></li>
            <li><a href="/tag/ui" className={(current == 'ui') ? "selected" : ''}>UI</a></li>
            <li><a href="/tag/fullstack" className={(current == 'fullstack') ? "selected" : ''}>fullstack</a></li>
            <li><a href="/tag/js" className={(current == 'php') ? "selected" : ''}>Js</a></li>
            <li><a href="/tag/codep" className={(current == 'codep') ? "selected" : ''}>Codepen</a></li>
          </ul>
        </nav>

    );
}

export default NavBar;