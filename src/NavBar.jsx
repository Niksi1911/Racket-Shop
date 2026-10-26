import racketLogo from "../src/assets/racket-logo.png"
import racketShop from "../src/assets/racket-shop.png"
import cartIcon from "../src/assets/cart-icon.png"
import { Link } from "react-router";
import "./NavBar.css";
import { useState } from "react";
import CartDropdown from "./Components/Cart";

function NavBar() {

    const [isCartOpen, setIsCartOpen] = useState(false)

    return (
        <div className="navbar">
            <div className="navbar-container">

                <div className="navbar-logo">
                    <img src={racketLogo} alt="" className="navbar-logo-icon" />
                    <img src={racketShop} alt="" className="navbar-logo-text" />
                </div>

                <div className="navbar-links">
                    <Link to="/" className="navbar-link-home">
                        Home
                    </Link>

                    <div className="navbar-cart-wrapper">
                        <button
                            type="button"
                            className="navbar-cart"
                            onClick={() => setIsCartOpen(!isCartOpen)}
                            aria-expanded={isCartOpen}
                        >
                            <img src={cartIcon} alt="" className="navbar-cart-icon" />
                            <span>Cart (0)</span>
                        </button>

                        {isCartOpen && (
                            <div className="navbar-cart-dropdown">
                                <CartDropdown/>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
}

export default NavBar;