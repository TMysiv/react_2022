import React from 'react';
import {Link} from "react-router-dom";

import css from './user.module.css'

const User = ({user}) => {
    const {id, name} = user

    return (
        <div className={css.user}>
            {id}) {name}
            <Link to={id.toString()} state={user}>
                <button>Details</button>
            </Link>
            <Link to={`${id}/albums`}>
                <button>Albums</button>
            </Link>
        </div>
    );
};

export default User;