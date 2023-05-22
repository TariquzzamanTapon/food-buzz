import React from 'react';

const Chef = ({ chef }) => {
    const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, recipes } = chef
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='object-cover h-48 w-96' src={chefPicture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p>Years Of Experience {yearsOfExperience}</p>
                    <p>Number of Recipes {numberOfRecipes}</p>
                    <p>Likes {likes}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Chef;