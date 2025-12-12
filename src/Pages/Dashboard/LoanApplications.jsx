import React from 'react';
import useRole from '../../Hooks/useRole';
import ApplicationsTable from '../../Components/Dashboard/ApplicationsTable';

const LoanApplications = () => {
    const role = useRole()
    return (
        <div>
            <ApplicationsTable/>
        </div>
    );
};

export default LoanApplications;