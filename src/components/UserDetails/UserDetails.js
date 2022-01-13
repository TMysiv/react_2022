import React from 'react';

import './userDetails.css'

const UserDetails = ({userDetail:{id,name,username,email,address:{street,city,suite,zipcode,geo:{lat,lng}},
    phone,website,company:{nameCompany,catchPhrase,bs}},addPosts}) => {
    return (
        <div className={'details'}>
            {
                <ul>
                    <li>id - {id}</li>
                    <li>name - {name}</li>
                    <li>username - {username}</li>
                    <li>email - {email}</li>
                    <li>address:
                        <ul>
                            <li>street - {street}</li>
                            <li>city - {city}</li>
                            <li>suite - {suite}</li>
                            <li>zipcode - {zipcode}</li>
                            <li>geo:
                                <ul>
                                    <li>lat - {lat}</li>
                                    <li>lng - {lng}</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>phone - {phone}</li>
                    <li>website - {website}</li>
                    <li>company:
                        <ul>
                            <li>nameCompany - {nameCompany}</li>
                            <li>catchPhrase - {catchPhrase}</li>
                            <li>bs - {bs}</li>
                        </ul>
                    </li>

                </ul>
            }
            <button onClick={()=>{
                addPosts()
            }
            }>Posts</button>
        </div>
    );
};

export default UserDetails;