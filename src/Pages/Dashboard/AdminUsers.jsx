import React, { useEffect, useState } from 'react';
import UserTable from '../../Components/Dashboard/UserTable';
import LoaidngSpinenr from '../../Components/Shared/LoaidngSpinenr';

const AdminUsers = () => {
    const [users, setusers] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch(`${import.meta.env.VITE_DOMAIN}/users`)
            .then(res => res.json())
            .then(data => {
                setusers(data);
                setLoading(false)

            });
    }, [search]);

    const handeleSearch = (e) => {
        e.preventDefault()
        const search = e.target.value

        fetch(`${import.meta.env.VITE_DOMAIN}/users??search=${search}`)
            .then(res => res.json())
            .then(data => {
                setusers(data);
                setLoading(false)

            });

    }

    console.log(users);
    if (loading) return <LoaidngSpinenr />
    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-transparent">

                <form onChange={handeleSearch}>
                    <input
                        type="text"
                        placeholder="Search by name..."
                        className="input input-bordered w-full max-w-md mb-4"
                    />
                </form>

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
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) =>
                                <UserTable user={user} key={user._id} index={index} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUsers;