import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";


const NavBar = () => {
    return (
        <div className="nav-container mb-3">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div classname="container">
                    <div className="navbar-brand log" />
                    <MainNav />
                    <AuthNav />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;