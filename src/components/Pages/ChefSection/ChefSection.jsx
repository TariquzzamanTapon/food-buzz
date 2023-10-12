import React, { useEffect, useState } from 'react';

import Chef from '../chef/chef';


const ChefSection = () => {
    const [chefs, setChefs] = useState([])
    useEffect(()=>{
        fetch('https://chef-hunter-server-sigma.vercel.app/chefs')
        .then(res=> res.json())
        .then(data => setChefs(data) )
    }, [])
    return (
        <div>
            <h1 className='md:text-5xl text-2xl text-center font-bold md:mb-5 mt-10 md:mt-20'>Meet our <span className='text-orange-400'>Chefs</span>.</h1>
            {/* <div className=' h-1 w-2/5 mx-auto text-center bg-orange-200'></div> */}
            <div className="grid md:grid-cols-3 grid-cols-1 px-2 mg:gap-9 gap-5">
                {
                    chefs?.map(chef => <Chef key={chef._id} chef={chef}></Chef>)
                }
            </div>
        </div>
    );
};

export default ChefSection;