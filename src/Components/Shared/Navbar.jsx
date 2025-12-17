import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import avatar from '../../assets/placeholder.jpg'
import { AiFillAppstore, AiOutlineMenu } from 'react-icons/ai';
import { IoExitOutline, IoHomeOutline, IoMoon } from 'react-icons/io5';
import { MdHomeRepairService } from 'react-icons/md';
const Navbar = () => {
    const [theme, Settheme] = useState(localStorage.getItem("theme") || "light")
    const { user, logOut } = useAuth()
    console.log(user);

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handeltheme = (checked) => {
        Settheme(checked ? "dark" : "light")

    }
    const navLinks = <>
        <NavLink to='/' className="flex items-center gap-2"><IoHomeOutline />Home</NavLink>
        <NavLink to='/AllLoans' className="flex my-3 items-center gap-2"><MdHomeRepairService />All Loans</NavLink>
    </>
    const handleSignOut = () => {
        logOut()
            .then(res => console.log(res))
    }
    return (
        <div className='bg-transparent sticky top-0 z-50  shadow-sm'>
            <div className="navbar max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="text-xl font-bold">Loan-Link</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu  space-x-5 menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role=" button" className="m-1 flex items-center bg-orange-400 rounded-2xl px-2 p-1 gap-2">

                                    <AiOutlineMenu color='white' size={24} />
                                    <img
                                        className='rounded-full'
                                        referrerPolicy='no-referrer'
                                        src={user && user.photoURL ? user.photoURL : avatar}
                                        alt='profile'
                                        height='30'
                                        width='30'
                                    />
                                </div>
                                <ul tabIndex="-1" className="dropdown-content space-y-2 menu bg-base-100 rounded-box z-1 w-70 text-xl p-2 shadow-sm">
                                    <li><Link to='/dashboard' className='flex items-center gap-2'><AiFillAppstore size={20}/> Dashboard</Link></li>
                                  
                                    <li className=''><div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            onChange={(e) => handeltheme(e.target.checked)}
                                            defaultChecked={localStorage.getItem('theme') === "dark"}
                                            className="toggle toggle-md" /><IoMoon size={20}/></div></li>
                                    <li><button
                                        onClick={handleSignOut}
                                        className='btn rounded-md border-none bg-orange-400 text-white '><IoExitOutline size={20} />Sign Out</button></li>
                                </ul>
                            </div>
                            :
                            <Link to='/Register' className="btn rounded-md border-none bg-orange-400 text-white ">Register</Link>

                    }

                    {
                        !user && <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                onChange={(e) => handeltheme(e.target.checked)}
                                defaultChecked={localStorage.getItem('theme') === "dark"}
                                className="toggle toggle-md" /><IoMoon size={20}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;