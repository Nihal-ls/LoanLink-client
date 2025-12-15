import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Addloans = () => {
    const { register, handleSubmit } = useForm()


    const handleformSubmit = async (data) => {
        console.log(data);
        await axios.post(`${import.meta.env.VITE_DOMAIN}/add-loans`,
            data
        )
        Swal.fire({
            title: "loan Added Successfully",
            icon: "success"
        });
    }


    return (
        <div>
            <div className="hero bg-transparent min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add a loan now!</h1>
                    </div>
                    <div className="card bg-transparent w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleformSubmit)} className="fieldset">

                                {/* loan name */}
                                <label className="label">Loan Name</label>
                                <input {...register('loanTitle')} type="text" className="input" placeholder="Loan Name" />


                                {/* loan description */}
                                <label className="label">Loan Description</label>
                                <input {...register('description')} type="text" className="input" placeholder="Description" />

                                {/* loan category */}
                                <label className="label">Loan Name</label>
                                <input {...register('category')} type="text" className="input" placeholder="Category" />


                                {/* interest rate */}
                                <label className="label">Loan interest Rate</label>
                                <input type="number" {...register("interestRate")} className="input" placeholder="interest rate" />


                                {/* MAx laon limit */}
                                <label className="label">Max Loan Limit</label>
                                <input type="number" {...register("maxLimit")} className="input" placeholder="Max Limit" />
                                {/* required docs */}
                                <label className="label">Required Document</label>

                                <select {...register('requiredDocs')} defaultValue="Pick a color" className="select">
                                    <option disabled={true}>Pick a Document</option>
                                    <option value='National Id'>National Id</option>
                                    <option value='Passport'>Passport</option>
                                </select>

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
                                <input type="url" {...register("loanImage")} className="input" placeholder="loan Image" />

                                <button type='Submit' className="btn bg-orange-500 mt-4">Apply</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addloans;