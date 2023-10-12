import React from 'react';

const ContactUs = () => {
    return (
        <div className='p-1 sm:p-2 md:p-7 lg:p-10 text-center bg-slate-100'>
            <h1 className='text-2xl font-bold'>Subscribe Newsletter</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ex <br /> temporibus magni ipsam inventore dolorum sunt, amet vel.</p>
            
            <div className='my-2'>
                <input type="text" className='input bg-transparent border-black' placeholder='Enter  Email address' />

                <button className=' bg-red-500 p-3 rounded-lg ml-1 text-white font-semibold'>SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default ContactUs;