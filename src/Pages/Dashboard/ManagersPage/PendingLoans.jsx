import React from 'react';
import useRole from '../../../Hooks/useRole';

const PendingLoans = () => {
    const role = useRole()

    if (role !== "Manager") {
        return <h1>You are not allowed</h1>
    }

 
  

    return (

        <div>
            hello data is here
        </div>
    );
};

export default PendingLoans;