import "./NavBar.css"
import Link from "./Link"

function NavBar(){
    return (
        <ul>
            <li>
            <Link>home</Link>
            </li>
            <li>
            <Link>contacts</Link>
            </li>
            <li>
            <Link>about</Link>
            </li>
        </ul>
    )
}

export default NavBar