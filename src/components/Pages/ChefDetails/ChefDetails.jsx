import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chef = useLoaderData()
    console.log(chef)
    return (

        <div>
            This chef details
        </div>
    );
};

export default ChefDetails;