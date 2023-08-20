import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { HiOutlineDocumentText, HiOutlineLogout, HiOutlineMail } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import Chef from '../chef/chef';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import ChefSection from '../ChefSection/ChefSection';
import Carousel from '../Carousel/Carousel';


const Home = () => {
    const chefs = useLoaderData();
    return (
        <>
            <Banner></Banner>
            <ChefSection chefs={chefs}></ChefSection>
            <Carousel></Carousel>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;