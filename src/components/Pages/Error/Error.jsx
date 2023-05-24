import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto md:w-1/3' src='https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=740&t=st=1684947529~exp=1684948129~hmac=e67be438b0e400f2d457c8daddc629bc5127a624c988010d30e2a2ae16ede155' alt="" />

            <Link to='/' className='btn btn-info mx-auto'><FaArrowCircleLeft></FaArrowCircleLeft> Back To Home</Link>
        </div>
    );
};

export default Error;