import "./NavBar.css"
import Link from "./Link"

function NavBar(){
    const x = 10
    return (
    <>
        <div className={`rounded-lg w-72 h-72 rotate-45 ${
            x < 10 ? "bg-red-500 rotate-45" : "bg-sky-500"
            }`}>x è {x}</div>
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
    </>
    )
}

export default NavBar