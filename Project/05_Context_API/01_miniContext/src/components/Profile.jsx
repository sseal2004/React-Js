import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    // When user is not there
    if (!user) {
        return <div>Please Login</div>;
    }

    return <div>Welcome {user.username}</div>;
}

export default Profile;
