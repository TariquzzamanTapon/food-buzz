import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { HiOutlineDocumentText, HiOutlineLogout, HiOutlineMail } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';
import Chef from '../chef/chef';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import ChefSection from '../ChefSection/ChefSection';
import Carousel from '../Carousel/Carousel';
import ImgBanner from '../ImgBanner/ImgBanner';
import HomeMenu from '../HomeMenu/HomeMenu';


const Home = () => {
   
    return (
        <>
            <Banner></Banner>
            <ImgBanner></ImgBanner>
            <ChefSection></ChefSection>
            <HomeMenu></HomeMenu>
            <Carousel></Carousel>
            <ContactUs></ContactUs>
        </>
    );
};

export default Home;