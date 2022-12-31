import React from "react";
import style from "./header.module.css";
import logo from "../../img/logo.jpg";

export default function Header() {
    return (
        <>
            <div className={style.title}>
                <h1>HRnet</h1>
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
            </div>
        </>
    );
}
