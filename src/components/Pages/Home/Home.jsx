import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import Chef from '../chef/chef';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <>
            {/* banner section  */}
            <div className='m-3 md:m-10 md:flex md:items-center'>
                <div className="left-side md:w-1/2">
                    <p className='md:text-5xl text-2xl font-bold md:mb-5'>Hey, welcome to <br /> our Food<span className='text-orange-400'>Buzz</span> Website.</p>
                    <p className='my-3 text-xl md:text-2xl'>To the website</p>
                    <p className='my-3'>Fodde pepole Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse blanditiis quas quam sed incidunt modi. Odit fugiat eligendi nisi quos.</p>

                    <Link to='/register' className='btn my-3 rounded-lg'>Sign up <HiOutlineLogout className='h-6 w-6'> </HiOutlineLogout></Link>

                </div>
                <div className="ride-side md:w-1/2">
                    <img className='object-cover' src="https://img.freepik.com/free-vector/professional-chefs-cooking-culinary-chefs-hand-drawn-sketch-vector-illustration_460848-14882.jpg?w=740&t=st=1684735512~exp=1684736112~hmac=cecff8c34398185f040fc3c702a3ffbf03474bc5ba004f6f2fc6252279bc96a2" alt="" />
                </div>
            </div>

            {/* chef section */}
            <div className="grid md:grid-cols-3 grid-cols-1 px-2 gap-3">
                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>
        </>
    );
};

export default Home;