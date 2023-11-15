import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
    return (
        <header>
            <nav className="nav">
                <div className="nav__links">
                    <Link to="/">
                        <div className="nav__link">Feed</div>
                    </Link>
                    <div className="link__border"></div>
                    <Link to="/create-post">
                        <div className="nav__link">Create Post</div>
                    </Link>
                    <div className="link__border"></div>
                    <Link to="/logout">
                        <div className="nav__link">Logout</div>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;