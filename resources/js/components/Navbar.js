import React from "react";
import { LinkContainer } from "react-router-bootstrap";

function Navbar() {
    const auth_token = localStorage.getItem("auth_token");

    function logoutHandler(){
        localStorage.removeItem("auth_token");
        window.location.href = "/";
    }

    return (
        <nav
            style={{ height: 70 }}
            className="px-5 navbar navbar-expand-lg navbar-dark bg-success"
        >
            <div className="container-fluid">
                <LinkContainer to={auth_token ? '/admin-dashboard' : '/'}>
                    <a className="navbar-brand">Rice'Best</a>
                </LinkContainer>
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
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <LinkContainer to="/aboutUs">
                                <a className="nav-link">About Us</a>
                            </LinkContainer>
                        </li>
                        {auth_token ? <li className="nav-item">
                                <a href="#" onClick={logoutHandler} className="nav-link">Logout</a>
                        </li>: null}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
