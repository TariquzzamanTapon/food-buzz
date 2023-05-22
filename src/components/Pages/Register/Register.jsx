import React from 'react';
import { HiOutlineLockClosed, HiOutlineLogin, HiOutlineLogout, HiOutlineMail, HiOutlinePhotograph, HiUser } from "react-icons/hi";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="shadow-xl md:flex justify-between rounded p-2 md:p-7 m-3 md:w-2/3 mx-auto">

                {/* new brand */}
                <div className='md:h-1/2 md:w-1/2 text-center p-4'>
                    <h1 className='text-2xl font-bold p-2 md:p-3'>Already have a account ?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ducimus minus sequi assumenda ?</p>
                    <div className='mt-2'>
                        <Link to='/login' className='btn rounded-lg'><HiOutlineLogin className='h-6 w-6'></HiOutlineLogin>Login</Link>
                    </div>
                    <img src="https://img.freepik.com/free-vector/rocket-launch-clouds_1308-16111.jpg?w=740&t=st=1684732028~exp=1684732628~hmac=b001e9ea5218fd28f306adcca4035493579906d516c99347b603a3b70902692d" alt="" />

                </div>

                <div className='md:h-1/2 md:w-1/2 text-center p-4 '>
                    <h1 className='text-2xl font-bold p-2 md:p-3 mb-4'>Sign Up</h1>
                    <form action="">
                        
                        <div className="input-group mb-3">
                            <span>
                                <HiUser className='h-6 w-6'></HiUser>
                            </span>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered w-full" required/>
                        </div>

                        <div className="input-group mb-3">
                            <span>
                                <HiOutlineMail className='h-6 w-6'></HiOutlineMail>
                            </span>
                            <input type="email" placeholder="Email " name='email' className="input input-bordered w-full" required />
                        </div>

                        <div className="input-group mb-3">
                            <span>
                                <HiOutlinePhotograph className='h-6 w-6'></HiOutlinePhotograph>
                            </span>
                            <input type="text" placeholder="Photo URL " name='photo' className="input input-bordered w-full" required />
                        </div>

                        <div className="input-group mb-3">
                            <span>
                                <HiOutlineLockClosed className='h-6 w-6'></HiOutlineLockClosed>
                            </span>
                            <input type="password" placeholder="Password " className="input input-bordered w-full" />
                        </div>
                    </form>
                    <div className='mb-3'>
                        <button className='btn rounded-lg'><HiOutlineLogin className='h-6 w-6'></HiOutlineLogin>SIGN UP</button>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Register;