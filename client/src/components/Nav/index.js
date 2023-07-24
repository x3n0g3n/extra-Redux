import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import shoppingBag from "../../assets/images/shopping.png";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1 nav-link">
            <h1>
              <Link to="/">
                <span role="img" aria-label="Colorful shopping bags">
                  <img src={shoppingBag} />
                </span>
                Shop/Shop
              </Link>
            </h1>
          </li>
          <li className="mx-1 nav-link">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1 nav-link">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1 nav-link">
            <h1>
              <Link to="/">
                <span role="img" aria-label="Colorful shopping bags">
                  <img src={shoppingBag} />
                </span>
                Shop/Shop
              </Link>
            </h1>
          </li>
          <li className="mx-1 nav-link">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1 nav-link">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="px-1 header">
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
