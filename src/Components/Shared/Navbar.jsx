import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [theme, Settheme] = useState(localStorage.getItem("theme") || "light")
    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handeltheme = (checked) => {
        Settheme(checked ? "dark" : "light")

    }
    const navLinks = <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/AllLoans'>All Loans</NavLink>
    </>
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
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
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
                    <Link to='/Register' className="btn rounded-md border-none bg-orange-400 text-white ">Register</Link>
                    <input
                        type="checkbox"
                        onChange={(e) => handeltheme(e.target.checked)}
                        defaultChecked={localStorage.getItem('theme') === "dark"}
                        className="toggle toggle-md" /></div>
            </div>
        </div>
    );
};

export default Navbar;