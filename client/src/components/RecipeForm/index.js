import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_RECIPE } from '../../utils/mutations';

const RecipeForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        ingredients: [],
        instructions: [],
        type: '',
    });

    const [createRecipe, { error }] = useMutation(CREATE_RECIPE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = createRecipe({
                variables: { ...formState },
            });

            window.location.reload();
        } catch (err) {
            console.error(err)
        }
    };

    const handleChange = (event) => {
        const { input, value } = event.target;

        if(input === 'name' && value.length > 1) {
            setFormState({ ...formState, [input]: value });
        } 
    };

    return (
        <div>
            <h3>Want to create your own recipe? Do so here!</h3>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <h4>Recipe Name</h4>
                    <input name="recipeName" placeholder="What's your recipes name?" value={formState.name} onChange={handleChange}></input>
                </div>
                <div>
                    <h4>Ingredients</h4>
                    <textarea name="recipeIngredients" placeholder="eggs, milk, bread, ..." value={formState.ingredients} onChange={handleChange}></textarea>
                </div>
                <div>
                    <h4>Instructions</h4>
                    <textarea name="recipeInstructions" placeholder="your instructions here" value={formState.instructions} onChange={handleChange}></textarea>
                </div>
                <div>
                    <h4>Type</h4>
                    <select name="recipeType" onChange={handleChange}>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                    </select>
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
                {error && (
                    <div>Something went wrong...</div>
                )}
            </form>
        </div>
    )
}

export default RecipeForm