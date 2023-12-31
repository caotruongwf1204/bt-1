import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <Link className="logo" to={"/"}>
            <h1>Start Bootstrap</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <NavLink className="link" to={"/"}>Home</NavLink>
              <NavLink className="link" to={"/about"}>About</NavLink>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="link" to={"/products"}>All products</NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <NavLink to={"/shopping-cart"}>
                <button className="btn btn-outline-dark" type="submit">
                  <i
                    className="fa-solid fa-cart-shopping"
                    style={{ color: "#000000" }}
                  ></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    0
                  </span>
                </button>
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
