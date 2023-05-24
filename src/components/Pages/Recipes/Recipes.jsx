import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { HiOutlineThumbUp } from 'react-icons/hi';

const Recipes = ({ recipe }) => {

    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handleClick = () => {
        toast("Item added")
        setButtonDisabled(true);
    };
    console.log(recipe);
    return (
        <>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={recipe?.recipeImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {recipe?.recipeName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{recipe?.recipeDescription}</p>
                    <div>
                        <span className='font-semibold text-xl mb-2'>
                            Ingredients :
                        </span>
                        <div className='mb-1'>
                            {
                                recipe?.ingredients?.map(i => <p>{i}</p>)
                            }
                        </div>
                        <p className='mb-1'><span className='font-bold'>Cooking Method : </span>{
                            recipe?.cookingMethod
                        }</p>
                        <div className='flex '>

                            <div className='flex mx-2'>
                                <HiOutlineThumbUp className='h-6 w-6'></HiOutlineThumbUp>
                                <span> {recipe?.likes}k</span>
                            </div>
                            <div className='flex mx-2'>
                                <HiOutlineThumbUp className='h-6 w-6'></HiOutlineThumbUp>
                                <span> rating {recipe?.rating}k</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions justify-end items-center">
                        <button onClick={handleClick} className="btn btn-outline" disabled={isButtonDisabled}>favorite</button>
                        <Toaster />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recipes;