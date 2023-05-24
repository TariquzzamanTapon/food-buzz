import React, { useContext } from 'react';
import { HiOutlineLogin, HiOutlineLogout } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut();
    }

    console.log(user, 'come form header')
    return (
        <>
            <div className="navbar bg-base-100 shadow-amber-100 shadow ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <span className="font-bold text-2xl">Food<span className='text-orange-400'>Buzz</span></span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {
                        user ? <div>
                            <img src="" alt="" />
                            <Link>Log out</Link>
                        </div> : <Link>Log in</Link>
                    } */}
                    {
                        user ? <div className='flex'>
                            <div className='rounded-full w-10 mx-2'>
                                <img title={user?.displayName} src={user?.photoURL} alt="" />
                            </div>
                            <Link onClick={handleLogout} className='bg-orange-200 font-bold hover:bg-orange-300 hover:text-white py-2 px-3 rounded flex items-center'><HiOutlineLogout className='h-6 w-6'></HiOutlineLogout>Logout</Link>
                        </div> :
                            <><Link to="login" className='bg-orange-200 font-bold hover:bg-orange-300 hover:text-white py-2 px-3 rounded flex items-center'><HiOutlineLogin className='h-6 w-6'></HiOutlineLogin>Log in</Link></>
                    }
                    {/* 
                    <Link to="login" className='bg-orange-200 font-bold hover:bg-orange-300 hover:text-white py-2 px-3 rounded flex items-center'><HiOutlineLogin className='h-6 w-6'></HiOutlineLogin>Log in</Link> */}

                </div>
            </div>
        </>
    );
};

export default Header;