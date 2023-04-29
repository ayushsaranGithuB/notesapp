import Link from "next/link";


const NavBar = ({current}) => {
    return (
        <nav>
          <ul>
            <li><a href="/" className={(current == 'home') ? "selected" : ''}> ALL</a></li>
            <li><a href="/tag/css" className={(current == 'css') ? "selected" : ''}>CSS</a></li>
            <li><a href="/tag/js" className={(current == 'js') ? "selected" : ''}>JS</a></li>
            <li><a href="/tag/php" className={(current == 'php') ? "selected" : ''}>PHP</a></li>
            <li><a href="/tag/tools" className={(current == 'tools') ? "selected" : ''}>Tools</a></li>
          </ul>
        </nav>

    );
}

export default NavBar;