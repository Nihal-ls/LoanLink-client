import React, { useState } from 'react';
import useAuth from './useAuth';

const useRole = () => {

    const { user } = useAuth()
    const [role,setRole] = useState([])
    fetch(`${import.meta.env.VITE_DOMAIN}/users/role/${user?.email}`)
        .then(res => res.json())
        .then(data =>{ setRole(data)
        })
    return role 
};

export default useRole;