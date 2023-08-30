const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
    recipeId: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;