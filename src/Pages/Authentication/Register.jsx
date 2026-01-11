import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { saveorUpdateUsers } from '../../Utils';

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

const Register = () => {
  const { signInWithGoogle, setUser, createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const handlegoogleSignIn = async () => {
    const { user } = await signInWithGoogle();
    await saveorUpdateUsers({
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      role: user?.role,
    });
    setUser(user);
    navigate('/');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleformSubmit = async (data) => {
    const { name, email, photoURL, role } = data;
    const savingEmail = email.toLowerCase();
    const result = await createUser(email, data?.password);
    await updateUserProfile(name, photoURL);
    setUser(result.user);
    await saveorUpdateUsers({ name, email: savingEmail, photoURL, role });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black px-4">
      
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>
          <p className="text-sm text-gray-300 mt-2">
            Join us and start your journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleformSubmit)} className="space-y-4">
          
          <input
            {...register('name')}
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            {...register('email')}
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            {...register('photoURL')}
            type="url"
            placeholder="Profile Photo URL"
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <select
            {...register('role')}
            defaultValue="Pick a Role"
            className="w-full rounded-xl border border-white/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option disabled className="text-black">Pick a Role</option>
            <option value="borrower" className="text-black">Borrower</option>
            <option value="Manager" className="text-black">Manager</option>
          </select>
          <input
            {...register('password', {
              required: 'Password is required.',
              pattern: {
                value: PASSWORD_REGEX,
                message:
                  'Password must be at least 6 characters, contain one uppercase, and one lowercase letter.',
              },
            })}
            type="password"
            placeholder="Password"
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {errors?.password && (
            <p className="text-sm text-red-400">
              {errors.password.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-400 hover:bg-orange-500 transition text-white font-semibold py-3 mt-2"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Google Button */}
        <button
          onClick={handlegoogleSignIn}
          className="w-full flex items-center justify-center gap-3 rounded-xl bg-white text-black font-medium py-3 hover:bg-gray-100 transition"
        >
          <svg width="18" height="18" viewBox="0 0 512 512">
            <path fill="#EA4335" d="M153 219c22-69 116-109 179-50l55-54C309 40 157 43 90 170z"/>
            <path fill="#4285F4" d="M386 400c52-36 73-120 53-179H260v74h102c-7 37-38 57z"/>
            <path fill="#FBBC05" d="M90 341a208 200 0 010-171l63 49c-12 37-12 73 0 73z"/>
            <path fill="#34A853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341z"/>
          </svg>
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-orange-400 hover:underline">
            Login
          </Link>
        </p>
      </div>

      <Toaster />
    </div>
  );
};

export default Register;
