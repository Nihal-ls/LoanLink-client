import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
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
                <table className="table">
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
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td className='flex gap-2'>
                                        <button className='btn bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white' >Update</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;