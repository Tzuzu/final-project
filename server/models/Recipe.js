const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const recipeSchema = new Schema({
    ingredients: [{
        type: String,
        required: true,
    }],
    instructions: [{
        type: String,
        required: true,
    }],
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