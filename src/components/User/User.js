import React from 'react';
import {Link} from "react-router-dom";

import css from './user.module.css'

const User = ({user}) => {
    const {id, name} = user

    return (
        <div className={css.user}>
            <Link to={id.toString()} state={user}>{id}) {name}</Link>
        </div>
    );
};

export default User;