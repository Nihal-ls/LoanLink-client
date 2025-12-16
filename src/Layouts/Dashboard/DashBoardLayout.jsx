import React, { useEffect, useState } from 'react';
import { IoBagAdd, IoMoon } from 'react-icons/io5';
import { Link, NavLink, Outlet } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { AiFillShopping } from 'react-icons/ai';
import { FaClock, FaRegClock, FaUserClock, FaUsers } from 'react-icons/fa6';
import { FaMoneyCheckAlt, FaShoppingBag } from 'react-icons/fa';
import useRole from '../../Hooks/useRole';

const DashBoardLayout = () => {
    const [theme, Settheme] = useState(localStorage.getItem("theme") || "light")
    const { user } = useAuth()
    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handeltheme = (checked) => {
        Settheme(checked ? "dark" : "light")

    }

    const { role } = useRole()

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-transparent">
                        <div className="flex  justify-between w-full items-center">
                            <div className="flex  items-center">
                                <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    {/* Sidebar toggle icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                                </label>
                                <div className="px-4">Loan Link</div>

                                {/* theme toggle */}
                            </div>
                            <div className=" ">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handeltheme(e.target.checked)}
                                        defaultChecked={localStorage.getItem('theme') === "dark"}
                                        className="toggle toggle-md" /><IoMoon size={20} /></div>
                            </div>
                        </div>
                    </nav>
                    {/* Page content here */}
                    <div className="p-4">
                        <Outlet />
                    </div>
                </div>

                <div className="drawer-side shadow-3xl is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-transparent is-drawer-close:w-14 is-drawer-open:w-64">
                        {/* Sidebar content here */}
                        <ul className="menu w-full grow ">
                            {/* List item */}
                            <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Home">
                                    {/* Home icon */}
                                    <NavLink to='/' className='items-center flex gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-6"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                        <span className="is-drawer-close:hidden ">Home</span>
                                    </NavLink>
                                </button>
                            </li>
                            <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My loans">
                                    {/* Home icon */}
                                    <Link to='/dashboard' className='items-center flex gap-1' >
                                        <AiFillShopping size={24} />
                                        <span className="is-drawer-close:hidden">My Loans</span>
                                    </Link>
                                </button>
                            </li>


                            {role === 'Admin' &&
                                < li >
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Users">

                                        <NavLink to='/dashboard/Manage-users' className='items-center flex gap-1' >
                                            <FaUsers size={24} />
                                            <span className="is-drawer-close:hidden">Manage Users</span>
                                        </NavLink>
                                    </button>
                                </li>}

                            {role === 'Admin' &&
                                < li >
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="All Loans">

                                        <NavLink to='/dashboard/All-loan' className='items-center flex gap-1' >
                                            <FaShoppingBag size={24} />
                                            <span className="is-drawer-close:hidden">All Loans</span>
                                        </NavLink>
                                    </button>
                                </li>}

                            {role === 'Admin' &&
                                < li >
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Applications">

                                        <NavLink to='/dashboard/Loan-application' className='items-center flex gap-1' >
                                            <FaClock size={24} />
                                            <span className="is-drawer-close:hidden">Applications</span>
                                        </NavLink>
                                    </button>
                                </li>}
                            {role === 'Manager' &&
                                < li >
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Add Loans">

                                        <NavLink to='/dashboard/Add-loans' className='items-center flex gap-1' >
                                            <IoBagAdd size={24} />
                                            <span className="is-drawer-close:hidden">Add Loans</span>
                                        </NavLink>
                                    </button>
                                </li>}
                                {/* manage loans */}
                            {role === 'Manager' &&
                                < li >
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manager Loans">

                                        <NavLink to='/dashboard/manager-loans' className='items-center flex gap-1' >
                                            <FaMoneyCheckAlt size={24} />
                                            <span className="is-drawer-close:hidden">Manager Loans</span>
                                        </NavLink>
                                    </button>
                                </li>}
                                {/* manager--- pending loansn */}
                            {role === 'Manager' &&
                                < li >
                                    <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Pending Loans">

                                        <NavLink to='/dashboard/Pending-Loans' className='items-center flex gap-1' >
                                            <FaRegClock size={24} />
                                            <span className="is-drawer-close:hidden">Pending Loans</span>
                                        </NavLink>
                                    </button>
                                </li>}



                            {/* List item */}
                            <li>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Profile">
                                    {/* Settings icon */}
                                    <NavLink to='/dashboard/profile' className='flex items-center gap-2'>
                                        <img src={user && user?.photoURL} className='w-6 rounded-full' alt="" />
                                        <span className="is-drawer-close:hidden">My Profile</span>
                                    </NavLink>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DashBoardLayout;