import React from 'react';

const ImgBanner = () => {
    return (
        <div className=''>
            <img className='object-cover w-full h-96  ' src="https://images.deliveryhero.io/image/foodpanda/home-corporate-bd.jpg?width=1200&height=768" alt="" />

            <div className='mx-1 sm:mx-2 md:mx-7 -mt-36 z-auto lg:mx-10 w-1/2 rounded shadow p-5 bg-red-300 '>
                <h1 className='text-2xl mb-2 '>List your restaurant or shop on Food Buzz</h1>
                <p>
                    <p className='mb-2'>Would you like millions of new customers to enjoy your amazing food and groceries? So would we!</p>

                    <p className='mb-2'>
                        It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</p>

                    <p className='mb-2'>Interested? Let's start our partnership today!</p>
                </p>
                <button className=' btn btn-primary'>Get Started</button>
            </div>
        </div>
    );
};

export default ImgBanner;