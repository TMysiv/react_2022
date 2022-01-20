import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import ApiService from "../../services/api.service";
import UserAllInformation from "../UserAllInformation/UserAllInformation";

const UserDetails = () => {
    const {id} = useParams();

    const [user, setUser] = useState(null);

    const {state} = useLocation();

    const apiService = new ApiService('users');

    useEffect(() => {

        if (state) {
            setUser(state)
            return
        } else {
            apiService.getById(id).then(value => setUser({...value}))
        }
    }, [id])

    return (
        <div>
            <h3>Details:</h3>
            {user && <UserAllInformation user={user}/>}
        </div>
    );
};

export default UserDetails;