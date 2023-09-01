const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const recipeSchema = new Schema({
    ingredients: [{
        type: String,
        required: true,
        nullable: false,
    }],
    instructions: [{
        type: String,
        required: true,
        nullable: false,
    }],
    image: {
        type: String,
    },
    name: {
        type: String,
        required: true,
        nullable: false,
    },
    type: {
        type: String,
        required: true,
        nullable: false,
    }
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;