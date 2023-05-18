import { Link } from "react-router-dom"
import pupLogo from "../assets/demo-logo.png"
import svgLogo from "../assets/tinywow_demo-logo_23755198.svg"

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar--logo">
                    <Link to={"/"}>
                        <p>PupDev<img src={pupLogo} alt="logo" />Commerce</p>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
