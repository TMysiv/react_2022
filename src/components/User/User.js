import React from 'react';

const User = ({user:{id,name,email,username}}) => {
    return (
        <div>
            id --{id} name - {name} email --{email} username -- {username}
        </div>
    );
};

export default User;