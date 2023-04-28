import Link from "next/link";


const NavBar = ({current}) => {
    return (
        <nav>
          <ul>
            <li><a href="/" className={(current == 'home') ? "selected" : ''}> ALL</a></li>
            <li><a href="/" className={(current == 'css') ? "selected" : ''}>CSS</a></li>
            <li><a href="/" className={(current == 'js') ? "selected" : ''}>JS</a></li>
            <li><a href="/" className={(current == 'php') ? "selected" : ''}>PHP</a></li>
            <li><a href="/" className={(current == 'ai') ? "selected" : ''}>AI</a></li>
          </ul>
        </nav>

    );
}

export default NavBar;