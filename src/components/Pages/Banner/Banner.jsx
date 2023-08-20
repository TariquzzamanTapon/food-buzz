import React from 'react';
import Lottie from "lottie-react";
import chefs from '../Banner/chefs.json'
import { Link } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';

const Banner = () => {
    return (
        <div>
            <div className=' m-3 md:m-10 md:flex md:items-center md:text-left text-center'>
                <div className="left-side md:w-1/2 ">
                    <p className='md:text-5xl text-2xl font-bold md:mb-5'>Hey, welcome to <br /> our Food<span className='text-orange-400'>Buzz</span> Website.</p>
                    <p className='my-3 text-xl md:text-2xl'>To the website</p>
                    <p className='my-3'>Fodde pepole Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse blanditiis quas quam sed incidunt modi. Odit fugiat eligendi nisi quos.</p>

                    <Link to='/register' className='btn my-3 rounded-lg'>Sign up <HiOutlineLogout className='h-6 w-6'> </HiOutlineLogout></Link>

                </div>
                <div className="ride-side md:w-1/2">
                    <Lottie animationData={chefs} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Banner;