import React, { useEffect, useState } from 'react';

import useAuth from './useAuth';

const useRole = () => {
    const { user } = useAuth();
    console.log(user);
    console.log(user.email);
    
    const [role, setRole] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_DOMAIN}/users/role/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setRole(data)
                setLoading(false)
            })
    }, [user])
    console.log(role);

    return role
};

export default useRole;