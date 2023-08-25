const { Schema } = require('mongoose');

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
});

module.exports = recipeSchema;