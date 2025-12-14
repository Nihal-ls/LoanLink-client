import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router';

const UserTable = ({ user, index }) => {
    const handleRoleChange = async (e) => {
        const role = e.target.value
        console.log(role);
         try{
            await axios.patch(`${import.meta.env.VITE_DOMAIN}/update-role`,{email: user?.email,role: role })

        }
         catch{
            console.log('jkshdf');
         }
    }
    return (
            
                <tr>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <form onChange={handleRoleChange} action="">
                            <select defaultValue="Server location" className="select select-neutral">
                                <option disabled={true}>{user.role}</option>
                                <option value='Manager'>Manager</option>
                                <option value='Borrower'>Borrower</option>
                                <option value='Admin'>Admin</option>
                            </select>
                        </form>
                    </td>
                    <td className='flex gap-2'>
                        <button type='button' className='btn bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white' >Update</button>
                    </td>
                </tr>
    );
};

export default UserTable;  