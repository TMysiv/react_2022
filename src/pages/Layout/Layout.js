import React from 'react';
import {Link, Outlet} from "react-router-dom";

import css from './layout.css'

const Layout = () => {

    return (
        <div className={'wrap'}>
            <div className={'layout'}>
                <Link to={'cat'}><button>CAT</button></Link>
                <Link to={'mountain'}><button>MOUNTAIN</button></Link>
                <Link to={'dog'}><button>DOG</button></Link>
                <Link to={'girl'}><button>GIRL</button></Link>
                <Link to={'city'}><button>CITY</button></Link>
            </div>
            <div className={'outlet'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;