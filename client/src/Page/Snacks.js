import React from 'react';
import './style.css';
import { QUERY_RECIPES } from '../utils/queries';
import { useQuery } from '@apollo/client';

import Auth from '../utils/auth'

const Snacks = () => {
    const { loading, data } = useQuery(QUERY_RECIPES);
    const recipeData = data?.recipes || [];

    const handleSavedRecipes = (recipe) => {
        const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
        const isRecipeSaved = savedRecipes.some((savedRecipe) => savedRecipe._id === recipe._id);

        if (!isRecipeSaved) {
            savedRecipes.push(recipe);
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes))
        } else {
            alert('Recipe already saved')
        }
    }

    function Button(recipe) {
        if (!Auth.loggedIn()) {
          return null;
        } 
        return <button onClick={() => handleSavedRecipes(recipe)}>
        <i class="fas fa-save"></i>
        </button>;
      }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Snacks Recipes</h1>
            <p>Need something light to hold you over til your next meal? Make a snack 
                with one of these delicious recipes.</p>
            {recipeData.filter((recipe ) => recipe.type === 'Snack').map((recipe) => (
                <div key={recipe._id}>
                    <h2>{recipe.name}</h2>
                    <img src={recipe.imageUrl} alt={recipe.name} />
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Instructions</h3>
                    <p>{recipe.instructions}</p>
                    <Button loggedIn/>
                </div>
            ))}
        </div>
    );
};

export default Snacks;
