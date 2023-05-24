import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';

const ChefDetails = () => {
    const chef = useLoaderData();
    
    console.log(chef);
    const { id, chefPicture, chefName, chefDescription, yearsOfExperience, numberOfRecipes, likes, recipes } = chef;
    return (
        <>
            <div className='my-3 py-2 shadow'>
                <div className='md:h-52 h-36 bg-orange-200 rounded-t-lg'>
                </div>
                <div className='ml-8'>
                    <img className="md:w-52 w-28 h-28 md:h-52 rounded-full  md:-mt-20 -mt-10 border-4 border-white mb-5" src={chefPicture} alt="Avatar of Jonathan Reinink"></img>
                    <div className='w-full  md:w-1/2'>

                        <h1 className='text-xl font-bold mb-2'>{chefName}</h1>
                        <p className='mb-2'>{chefDescription}</p>
                        <p className='mb-2'><span className='font-bold'>Likes : </span> {likes}</p>
                        <p className='mb-2'><span className='font-bold'>number of recipes : </span> {numberOfRecipes}</p>
                        <p className='mb-2'><span className='font-bold'>Years Of Experience. : </span> {yearsOfExperience}</p>

                    </div>
                </div>

                <div className="my-2 ml-8">
                    <hr className='w-3/5 mx-auto py-1 mt-2'></hr>
                    <h2 className='font-bold text-xl md:text-2xl text-center'>
                        Here are my favorite recipes </h2>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                    {
                        recipes.map(recipe => <Recipes recipe ={recipe} ></Recipes>)
                    }
                    
                </div>
            </div>

        </>
    );
};

export default ChefDetails;