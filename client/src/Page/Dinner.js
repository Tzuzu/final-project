import React from 'react';
import './style.css';
import { QUERY_RECIPES } from '../utils/queries';
import { useQuery } from '@apollo/client';

import Auth from '../utils/auth';

const Dinner = () => {
    const { loading, data } = useQuery(QUERY_RECIPES);
    const recipeData = data?.recipes || [];

    function Button({ recipeId }) {
        if (!Auth.loggedIn()) {
            return null;
        }
        return (
            <button className={`edit-button-${recipeId}`}>
                <i className="fas fa-save"></i>
            </button>
        );
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Dinner Recipes</h1>
            <p>Need something light to hold you over til your next meal? Make a snack with one of these delicious recipes.</p>
            <div className="Dinner-container"  >
                {recipeData.filter((recipe) => recipe.type === 'Dinner').map((recipe, index) => (
                    <div key={recipe._id} className={`recipe-box ${index % 2 === 0 ? 'recipe-left' : 'recipe-right'}`}>
                        <div className="recipe-content">
                            <h2>{recipe.name}</h2>
                            <div className={`recipe-details ${index % 2 === 0 ? 'details-left' : 'details-right'}`}>
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
                                    <Button recipeId={recipe._id} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dinner;
