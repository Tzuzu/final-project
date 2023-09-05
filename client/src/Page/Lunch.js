import React from 'react';
import './style.css';
import { QUERY_RECIPES } from '../utils/queries';
import { useQuery } from '@apollo/client';

import Auth from '../utils/auth';

const Lunch = () => {
    const { loading, data } = useQuery(QUERY_RECIPES);
    const recipeData = data?.recipes || [];

    function Button(recipe) {
        if (!Auth.loggedIn()) {
            return null;
        }
        return (
            <button>
                <i className="fas fa-save"></i>
            </button>
        );
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Lunch Recipes</h1>
            <p>Need help with your next mid-day meal? Hurry, come check out a recipe.</p>
            <div className="lunch-container">
                {recipeData.filter((recipe) => recipe.type === 'Lunch').map((recipe) => (
                    <div key={recipe._id} className="recipe-box">
                        <div className="recipe-content">
                            <h2>{recipe.name}</h2>
                            <div className="recipe-details">
                                <div className="recipe-image">
                                    <img src={recipe.image} alt={recipe.name} />
                                </div>
                                <div className="recipe-description">
                                    <h3>Ingredients</h3>
                                    <ul>
                                        {recipe.ingredients.map((ingredient, i) => (
                                            <li key={i}>{ingredient}</li>
                                        ))}
                                    </ul>
                                    <h3>Instructions</h3>
                                    <p>{recipe.instructions}</p>
                                    <Button loggedIn />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lunch;