import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useRole from '../../Hooks/useRole';

const Profile = () => {
    const { user } = useAuth()
       const {role}  = useRole()
    return ( 
        <div className='max-w-7xl mx-auto'>
            <div className="card py-10 max-w-160  mx-auto shadow-2xl hover:scale-120 transition ease-in-out">
                <img className='w-40 mx-auto rounded-full' src={user && user?.photoURL} alt="" />
                <div className="text-center">
                    <span className='font-bold bg-orange-500 text-white p-2 rounded-lg mt-5'>{role}</span>
                    <h1 className='mt-2'>Display Name: <span className='font-bold'>{user?.displayName}</span></h1>
                    <h1 className='mt-2'>Email: <span className='font-bold'>{user?.email}</span></h1>
                    <h1 className='mt-2'>UID: <span className='font-bold'>{user?.uid}</span></h1>

                </div>
            </div>
        </div>
    );
};

export default Profile;