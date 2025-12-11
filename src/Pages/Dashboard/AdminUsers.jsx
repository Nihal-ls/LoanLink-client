import React, { useEffect, useState } from 'react';
import UserTable from '../../Components/Dashboard/UserTable';

const AdminUsers = () => {
    const [users, setusers] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`${import.meta.env.VITE_DOMAIN}/users`)
            .then(res => res.json())
            .then(data => {
                setusers(data)
                setLoading(false)
            })
    }, [])
    if (loading) return <div>loading...</div>
    console.log(users);


    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-transparent">
                <table className="table border-2">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name </th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    
                        {/* row 1 */}
                        {
                            users.map((user, index) =>
                                <UserTable user={user} index={index}/>
                            )
                        }
                
                </table>
            </div>
        </div>
    );
};

export default AdminUsers;