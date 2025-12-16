import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

const UUpdateLoans = ({ loan }) => {

    const { register, handleSubmit } = useForm()

    const handleformSubmit = (data) => {

        const result = axios.put(`${import.meta.env.VITE_DOMAIN}/manager-loan/${loan._id}`, data)
        toast.success('Successfully Updated!')


    }

    return (
        <div>
            <div><Toaster position="top-right"
            /></div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box  bg-black/30">
                    <form onSubmit={handleSubmit(handleformSubmit)} className="fieldset sm:max-w-60 md:max-w-80 lg:max-w-100 mx-auto">

                        {/* loan name */}
                        <label className="label">Loan Name</label>
                        <input {...register('loanTitle')} type="text" className="input w-full" placeholder="Loan Name" />


                        {/* loan description */}
                        <label className="label">Loan Description</label>
                        <input {...register('description')} type="text" className="input w-full" placeholder="Description" />

                        {/* loan category */}
                        <label className="label">Loan Name</label>
                        <input {...register('category')} type="text" className="input w-full" placeholder="Category" />


                        {/* interest rate */}
                        <label className="label">Loan interest Rate</label>
                        <input type="number" {...register("interestRate")} className="input w-full" placeholder="interest rate" />


                        {/* MAx laon limit */}
                        <label className="label">Max Loan Limit</label>
                        <input type="number" {...register("maxLimit")} className="input w-full" placeholder="Max Limit" />


                        {/* EMI Plans */}

                        <label className="label">Available EMI Plans</label>

                        <div className="flex flex-col gap-2 bg-base-200  p-4 rounded-md">
                            <label className="cursor-pointer flex items-center gap-2 text-lg">
                                <input
                                    className='size-4'
                                    type="checkbox"
                                    value="8 months"
                                    {...register("availableEMIPlans")}
                                /> 8 Months
                            </label>

                            <label className="cursor-pointer flex items-center gap-2 text-lg">
                                <input
                                    className='size-4'
                                    type="checkbox"
                                    value="12 months"
                                    {...register("availableEMIPlans")}
                                /> 12 Months
                            </label>

                            <label className="cursor-pointer flex items-center gap-2 text-lg">
                                <input
                                    className='size-4'
                                    type="checkbox"
                                    value="24 months"
                                    {...register("availableEMIPlans")}
                                /> 24 Months
                            </label>

                        </div>

                        {/* image */}
                        <label className="label">Loan Image</label>
                        <input type="url" {...register("loanImage")} className="input w-full" placeholder="loan Image" />




                        <button type='Submit' className="btn bg-orange-500 mt-4">Apply</button>
                    </form>




                    <p className="py-4 text-center">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
        </div>
    );
};

export default UUpdateLoans;