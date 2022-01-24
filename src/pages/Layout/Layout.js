import React from 'react';
import {Link, Outlet} from "react-router-dom";

import css from './layout.css'
import Episodes from "../Episodes/Episodes";

const Layout = () => {
    return (
        <>
            <div className={'header'}>
                <Link to={'/'}>Rick and Morti</Link>
            </div>
            <div className={'episodes'}>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;