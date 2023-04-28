import Link from "next/link";


const NavBar = () => {
    return (
        <nav>
          <ul>
            <li><a href="/" className="selected">&gt; ALL</a></li>
            <li><a href="/">CSS</a></li>
            <li><a href="/">JS</a></li>
            <li><a href="/">PHP</a></li>
            <li><a href="/">AI</a></li>
          </ul>
        </nav>

    );
}

export default NavBar;