import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Menu = () => {


    return (
        <>
            <div>
                <NavLink to={'cars'}>CARS</NavLink>
                <NavLink to={'users'}>USERS</NavLink>
                <NavLink to={'posts'}>POSTS</NavLink>
                <NavLink to={'comments'}>COMMENTS</NavLink>
            </div>

            <Outlet/>

        </>
    );
};

export default Menu;