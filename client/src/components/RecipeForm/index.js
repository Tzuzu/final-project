import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_RECIPE } from '../../utils/mutations';
import './style.css'; // Import your CSS file

const RecipeForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    type: 'Breakfast',
  });

  const [createRecipe, { error }] = useMutation(CREATE_RECIPE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createRecipe({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'recipeName' && value.length > 1) {
      setFormState({ ...formState, name: value });
    } else if (name === 'recipeIngredients') {
      setFormState({ ...formState, ingredients: value });
    } else if (name === 'recipeInstructions') {
      setFormState({ ...formState, instructions: value });
    } else if (name === 'recipeType') {
      setFormState({ ...formState, type: value });
    }
  };

  return (
    <div className="recipe-form-container">
      <h3 className="recipe-form-header">Want to create your own recipe? Do so here!</h3>
      <form className="recipe-form" onSubmit={handleFormSubmit}>
        <div>
          <h4>Recipe Name</h4>
          <input
            name="recipeName"
            type="text"
            placeholder="What's your recipe's name?"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <h4>Ingredients</h4>
          <textarea
            name="recipeIngredients"
            placeholder="eggs, milk, bread, ..."
            value={formState.ingredients}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <h4>Instructions</h4>
          <textarea
            name="recipeInstructions"
            placeholder="your instructions here"
            value={formState.instructions}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <h4>Type</h4>
          <select name="recipeType" value={formState.type} onChange={handleChange}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
        {error && <div className="error-message">Something went wrong...</div>}
      </form>
    </div>
  );
};

export default RecipeForm;
