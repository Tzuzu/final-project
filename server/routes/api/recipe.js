const router = require('express').Router();
const {
    createRecipe,
    getOneRecipe,
    getAllRecipes,
    saveRecipe,
} = require('../../controllers/recipeController');

module.exports = router;