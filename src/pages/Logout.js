import React, {useEffect} from 'react';
const Logout = () => {
    localStorage.clear();
    useEffect(() => {
        localStorage.clear();
        if (!localStorage.getItem('user')) {
            window.location.href = '/app';
        }
    },[]);
};

export default Logout;
