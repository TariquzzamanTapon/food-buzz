import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-amber-100 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link>Blog</Link></li>
                        </ul>
                    </div>
                    <span className="font-bold text-2xl">Food<span className='text-orange-400'>Buzz</span></span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        <li><Link>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {
                        user ? <div>
                            <img src="" alt="" />
                            <Link>Log out</Link>
                        </div> : <Link>Log in</Link>
                    } */}

                    <Link className='bg-orange-200 hover:bg-orange-400 px-2 py-1 rounded'>Log in</Link>
                </div>
            </div>
        </>
    );
};

export default Header;