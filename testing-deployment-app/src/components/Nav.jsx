import Link from "next/link";

const Nav = () => {
    return (
        <nav>
        <ul>
            <li>
                <Link className="border rounded" href="/">Home</Link>
            </li>
            <li>
                <Link className="border rounded" href="/about">About</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Nav;