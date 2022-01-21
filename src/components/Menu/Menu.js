import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './menu.module.css'

const Menu = () => {
    return (
        <div>
            <div className={css.menu}>
                <NavLink to='users'>Users</NavLink>
                <NavLink to='post'>Posts</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>

    );
};

export default Menu;