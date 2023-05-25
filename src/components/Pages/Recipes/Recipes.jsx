import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { HiOutlineStar, HiOutlineThumbUp, HiStar } from 'react-icons/hi';

const Recipes = ({ recipe }) => {

    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handleClick = () => {
        toast("Item added")
        setButtonDisabled(true);
    };
    // console.log(recipe);
    const image = recipe?.recipeImage || 'https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=740&t=st=1684998870~exp=1684999470~hmac=8a33fa0490786b01992e96aca6e515e7ce8a47a888847d04b847b51998b0181a';
    return (
        <>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
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
                                recipe?.ingredients?.map(i => <p >{i}</p>)
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
                                <HiOutlineStar className='h-6 w-6'></HiOutlineStar>
                                <span> Rating {recipe?.rating}</span>
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