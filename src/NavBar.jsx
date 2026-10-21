import racketLogo from "../src/assets/racket-logo.png"
import racketShop from "../src/assets/racket-shop.png"
import cartIcon from "../src/assets/cart-icon.png"
import { Link } from "react-router";
import "./NavBar.css";

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-container">

                <div className="navbar-logo">
                    <img src={racketLogo} alt="" className="navbar-logo-icon" />
                    <img src={racketShop} alt="" className ="navbar-logo-text" />
                </div>

                <div className="navbar-links">
                    <Link to="/" className="navbar-link-home">
                        Home
                    </Link>

                    <div className="navbar-cart">
                       <img src={cartIcon} alt="" className="navbar-cart-icon" />
                       <span> Cart (0)</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NavBar;