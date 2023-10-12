import React from 'react';
import { useMenu } from '../../Hooks/useMenu/useMenu';
import ShopCard from '../ShopCard/ShopCard';

const HomeMenu = () => {
    const [menu, loading] = useMenu();
    const fruits = menu?.filter(item => item.category === 'fruits');

    if (loading) {
        return <p>Loading....</p>
    }
    return (
        <div className='p-1 sm:p-2 md:p-7 lg:p-10'>
            <h1 className='md:text-5xl text-2xl text-center font-bold md:mb-5 mt-10 md:mt-20'>Our <span className='text-orange-400'>Menu</span></h1>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {fruits?.map(item => <ShopCard item={item}></ShopCard>)}
            </div>
        </div>
    );
};

export default HomeMenu;