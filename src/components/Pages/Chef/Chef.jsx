import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, recipes } = chef
    return (
        <>
            <div className="card bg-base-100 shadow">
                <figure><img className='object-cover h-48 w-96' src={chefPicture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p>Years Of Experience {yearsOfExperience}</p>
                    <p>Number of Recipes {numberOfRecipes}</p>
                    <p>Likes {likes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/${id}`} className="btn btn-info text-white">View Recipes</Link>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Chef;