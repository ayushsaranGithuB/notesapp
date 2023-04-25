import Link from "next/link";


const NavBar = () => {
    return (
        <nav>
            <div className="wrapper">
                <div className="logo">
                    <Link href="/">dev.Notes</Link>
                </div>
                {/* <Link href="/notes">All Notes</Link>
                <Link href="/search">Search</Link> */}
            </div>
        </nav>

    );
}

export default NavBar;