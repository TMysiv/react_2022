import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './menu.css'

const Menu = () => {

    return (
        <>
            <div className={'menu'}>
                <NavLink to={'cars'}>CARS</NavLink>
                <NavLink to={'users'}>USERS</NavLink>
                <NavLink to={'posts'}>POSTS</NavLink>
                <NavLink to={'comments'}>COMMENTS</NavLink>
            </div>
            <div className={'outlet_menu'}>
                <Outlet/>
            </div>

        </>
    );
};

export default Menu;