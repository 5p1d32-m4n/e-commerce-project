import { Link } from "react-router-dom"
import pupLogo from "../assets/pupDevLogo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar--logo">
                    <p>
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                            PupDev<img src={pupLogo} alt="logo" />Commerce
                        </Link>
                    </p>
                </div>
                <div className="navbar--nav">
                    <p className="navbar--link">
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                            Paintings
                        </Link>
                    </p>
                    <p className="navbar--link">
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                            Sculptures
                        </Link>
                    </p>
                    <p className="navbar--link" style={{ textDecoration: "none" }}>
                        <Link to={"/"}>
                            Tactile Art
                        </Link>
                    </p>
                </div>
                <div className="navbar--quick-buttons">
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
            </nav>
        </header>
    )
}
