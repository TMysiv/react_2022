import React from 'react';
import {Link, Outlet} from "react-router-dom";

import css from './details.css'

const UserAllInformation = ({
                                user: {
                                    id,
                                    name,
                                    username,
                                    email,
                                    address: {street, city, suite, zipcode, geo: {lat, lng}},
                                    phone,
                                    website
                                }
                            }) => {


    return (

        <div>
            <div className={'details'}>
                <ul>
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{username}</li>
                    <li>{email}</li>
                    <li>address:
                        <ul>
                            <li>{street}</li>
                            <li>{city}</li>
                            <li>{suite}</li>
                            <li>{zipcode}</li>
                            <li>geo:
                                <ul>
                                    <li>{lat}</li>
                                    <li>{lng}</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>{phone}</li>
                    <li>{website}</li>
                </ul>
                <Link to={'posts'} state={id}><button >All Posts</button></Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserAllInformation;