import React from 'react';
import { useLoaderData } from 'react-router';

const Alloan = () => {

    const data = useLoaderData()
    if (!data) {
        return <div>Loading</div>
    }
    console.log(data);
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
                                <tr>
                                    <th>{index + 1}</th>
                                    <th><img className='sm:w-100 md:w-110 lg:w-120 md:h-60' src={loan.loanImage} alt="" /></th>
                                    <td>{loan.loanTitle}</td>
                                    <td>{loan.interestRate}</td>
                                    <td>{loan.category}</td>
                                    <td>{loan?.created_by}</td>
                                    <td>  <label className="label">
                                        <input type="checkbox"  className="checkbox" />
                                        Show On Home
                                    </label></td>
                                    <td className=''>
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

export default Alloan;