import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useRole from '../../../Hooks/useRole';
import ManagerLoans from './Page/ManagerLoans';

const ManageLoans = () => {
const {role} = useRole()


    return (
        <div>
              {role === 'Manager' && <ManagerLoans/>}
        </div>
    );
};

export default ManageLoans;