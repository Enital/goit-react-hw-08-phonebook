import React from "react";
import { NavLink } from "react-router-dom";

import css from './header.module.css'

function Header() {
    
    return (
        <header className={css.header}>
            <div className={css.container}>
                <NavLink to="/register" className={css.btn}>
                    <span className={css.title}>Register</span>
                </NavLink>
                <NavLink to="/login" className={css.btn}>
                    <span className={css.title}>Login</span>
                </NavLink>
                {/* <NavLink to="/" >
                    <span className={css.title}>Contacts</span>
                </NavLink> */}
            </div>
        </header>
    )
}

export default Header;