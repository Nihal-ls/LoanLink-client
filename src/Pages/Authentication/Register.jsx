import React from 'react';
import { AuthContext } from '../../Context/AuthContext';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
const Register = () => {
    const { signInWithGoogle, setUser, createUser, updateUserProfile } = useAuth()
    const navigate = useNavigate()
    const handlegoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                setUser(res.user)
                navigate('/')
            })
    }

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleformSubmit = (data) => {
        createUser(data?.email, data?.password)
            .then(res => {
                updateUserProfile(
                    data?.name,
                    data?.photoURL
                )
                setUser(res.user)
                navigate('/')
                toast.success('Registration successful!')
            })
    }


    return (
        <div>
            <div className="hero bg-transparent min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now</h1>
                    </div>
                    <div className="card bg-transparent w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleformSubmit)} className="fieldset">
                                {/*Name*/}
                                <label className="label">Name</label>
                                <input {...register('name')} type="text" className="input" placeholder="Name" />
                                {/* email */}
                                <label className="label">Email</label>
                                <input {...register('email')} type="email" className="input" placeholder="Email" />
                                {/* Photo */}
                                <label className="label">Photo</label>
                                <input {...register('photoURL')} type="url" className="input" placeholder="Photo" />
                                <label className="label">Pick Your Role</label>
                                {/* Role */}
                                <select
                                    {...register('role')}
                                    defaultValue="Pick a color" className="select">
                                    <option disabled={true}>Pick a color</option>
                                    <option value='borrower'>borrower</option>
                                    <option value='Manager'>Manager</option>
                                </select>

                                {/* Password */}
                                <label className="label">Password</label>
                                <input
                                    {...register('password', {
                                        required: 'Password is required.',
                                        pattern: {
                                            value: PASSWORD_REGEX,
                                            // Custom error message for the combined rule failure
                                            message: 'Password must be at least 6 characters, contain one uppercase, and one lowercase letter.',
                                        },
                                    })}

                                    type="password" className="input" placeholder="Photo" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type='submit' className="btn bg-orange-400 text-white mt-4">Register</button>
                            </form>
                            <button onClick={handlegoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <p className='text-sm text-red-500'>{errors?.password?.message}</p>

                        </div>
                    </div>
                </div>
            </div>
            <div><Toaster /></div>
        </div>
    );
};

export default Register;