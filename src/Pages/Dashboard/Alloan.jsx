import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import LoaidngSpinenr from '../../Components/Shared/LoaidngSpinenr';
import axios from 'axios';
import AllloanTable from '../../Components/Dashboard/AllloanTable';

const Alloan = () => {

    const data = useLoaderData()
    if (!data) {
        return <LoaidngSpinenr/>
    }

   


    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-transparent">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image </th>
                            <th>Title</th>
                            <th>Interest</th>
                            <th>Category</th>
                            <th>Created By</th>
                            <th>Show on home</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map((loan, index) =>
                               <AllloanTable loan={loan} index={index}/>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alloan;