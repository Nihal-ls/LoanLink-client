import React, { useEffect, useState } from 'react';

import useAuth from './useAuth';

const useRole = () => {
    const { user } = useAuth();

    
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

    return role
};

export default useRole;