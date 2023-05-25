import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { HiOutlineDocumentText, HiOutlineLogout, HiOutlineMail } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import Chef from '../chef/chef';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <>
            {/* banner section  */}
            <div className='m-3 md:m-10 md:flex md:items-center md:text-left text-center'>
                <div className="left-side md:w-1/2 ">
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

            <h1 className='md:text-5xl text-2xl text-center font-bold md:mb-5 mt-10 md:mt-20'>Meet our <span
                className='text-orange-400'>Chefs</span>.</h1>
            <p className='font-light mb-3 md:w-3/5 text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, molestias? Quia ex, repellat excepturi illo, fugit eius obcaecati iusto dolores temporibus, aliquam alias sint sapiente eum atque veniam saepe quisquam!</p>
            <div className="grid md:grid-cols-3 grid-cols-1 px-2 mg:gap-9 gap-5">

                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>

            {/* carousel */}
            <h1 className='md:text-5xl text-2xl text-center font-bold md:mb-5 mt-10 md:mt-20'>Most Trending  <span className='text-orange-400'>Recipes</span>.</h1 >
            <p className='font-light mb-3 text-center md:w-3/5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, molestias? Quia ex, repellat excepturi illo, fugit eius obcaecati iusto dolores temporibus, aliquam alias sint sapiente eum atque veniam saepe quisquam!</p>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/top-view-fast-food-mix-hamburger-doner-sandwich-chicken-nuggets-rice-vegetable-salad-chicken-sticks-caesar-salad-mushrooms-pizza-chicken-ragout-french-fries-mayo_141793-3997.jpg?w=900&t=st=1684987582~exp=1684988182~hmac=58d64d33a0933bdca79ec639747b7cd986db5f10f97b07e0e5d209acbb781d6d" className="w-4/5 mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27379.jpg?w=900&t=st=1684987714~exp=1684988314~hmac=d0c422e4766b5d6b8248ac728838ca6a06e949a932a22d870924f9cfbc025760" className="w-4/5 mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/top-view-fast-food-mix-hamburger-doner-sandwich-chicken-nuggets-rice-vegetable-salad-chicken-sticks-caesar-salad-mushrooms-pizza-chicken-ragout-french-fries-mayo_141793-3997.jpg?w=900&t=st=1684987582~exp=1684988182~hmac=58d64d33a0933bdca79ec639747b7cd986db5f10f97b07e0e5d209acbb781d6d" className="w-4/5 mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/top-view-fast-food-mix-hamburger-doner-sandwich-chicken-nuggets-rice-vegetable-salad-chicken-sticks-caesar-salad-mushrooms-pizza-chicken-ragout-french-fries-mayo_141793-3997.jpg?w=900&t=st=1684987582~exp=1684988182~hmac=58d64d33a0933bdca79ec639747b7cd986db5f10f97b07e0e5d209acbb781d6d" className="w-4/5 mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/* contact us */}
            <h1 className='md:text-5xl text-2xl text-center font-bold md:mb-5 mt-10 md:mt-20'>Contact <span className='text-orange-400'>Us</span>.</h1 >
            <p className='font-light mb-3 md:w-3/5 mx-auto text-center'>Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form className='w-full md:w-3/5 mx-auto py-7'>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                       
                    </label>
                    <input type="Email" placeholder="new@gmail.com" className="input input-bordered w-full" required/>
                </div>
                
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Your Subject</span>
                       
                    </label>
                    <input type="Email" placeholder="Your Subject" className="input input-bordered w-full"  required/>
                </div>

                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Your message</span>
                    </label>
                    <textarea type="Email" placeholder="Your Subject" className="w-full textarea textarea-bordered h-20" required />
                </div>

                <button className='btn btn-info'>Send Message</button>



            </form>
        </>
    );
};

export default Home;