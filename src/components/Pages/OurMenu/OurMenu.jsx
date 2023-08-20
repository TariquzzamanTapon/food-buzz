import React from 'react';
import { useMenu } from '../../Hooks/useMenu/useMenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import ShopCard from '../ShopCard/ShopCard';
import { useState } from 'react';
// import { CiIceCream } from 'react-icons/ci'; 
// import { FaPizzaSlice } from 'react-icons/fa'; 
// import { PiFishSimpleDuotone } from 'react-icons/pi'; 
// import { BiSolidDrink, BiBowlRice } from 'react-icons/bi'; 
// import { GiChickenOven, GiFruitBowl } from 'react-icons/gi'; 


const OurMenu = () => {
    const [menu, loading] = useMenu();
    const [loaditems, setLoadItems] = useState(true);
    if (loading) {
        return <p>Loading....</p>
    }

    const handleLoad = () => {
        setLoadItems(false)
    }

    const drinks = menu.filter(item => item.category === 'drink');
    const rice = menu.filter(item => item.category === 'rice');
    const chicken = menu.filter(item => item.category === 'chicken');
    const fruits = menu.filter(item => item.category === 'fruits');
    const icecream = menu.filter(item => item.category === 'icecream');
    const fish = menu.filter(item => item.category === 'fish');
    const desserts = menu.filter(item => item.category === 'desserts');

    return (
        <div className='md:my-10'>
            <h1 className='md:text-5xl text-2xl text-center font-bold md:mb-5 mt-10 md:mt-20'>Our <span className='text-orange-400'>Menu</span></h1>
            <Tabs>
                <TabList >
                    <Tab>
                        <div className=''>
                            <span className='flex items-center justify-between' ><MdOutlineRestaurantMenu></MdOutlineRestaurantMenu>All</span>
                        </div>
                    </Tab>
                    <Tab><span className='flex items-center justify-between'>Drinks</span></Tab>
                    <Tab>Rice</Tab>
                    <Tab>Chicken</Tab>
                    <Tab>Fruits</Tab>
                    <Tab>Ice cream</Tab>
                    <Tab>Fish</Tab>
                    <Tab>Desserts</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {menu.slice(0, loaditems ? 10 : menu.length).map(item => <ShopCard item={item}></ShopCard>)}
                    </div>
                    {
                        loaditems && <button onClick={handleLoad} className='btn btn-info mx-auto flex justify-center items-center my-3'>Load more</button>
                    }
                </TabPanel>
                <TabPanel>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {drinks.map(item => <ShopCard item={item}></ShopCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {rice.map(item => <ShopCard item={item}></ShopCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {chicken.map(item => <ShopCard item={item}></ShopCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {fruits.map(item => <ShopCard item={item}></ShopCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {icecream.map(item => <ShopCard item={item}></ShopCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {fish.map(item => <ShopCard item={item}></ShopCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {desserts.map(item => <ShopCard item={item}></ShopCard>)}
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default OurMenu;