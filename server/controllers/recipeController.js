const { Recipe } = require('../models');

module.exports = {
    async createRecipe(req, res) {
        try {
            const { name, ingredients, instructions } = req.body;
            const newRecipe = await Recipe.create({
                name,
                ingredients,
                instructions
            });
            res.status(201).json(newRecipe);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'You have encountered errors'});
        }
    },

    async getAllRecipes(req, res) {
        try {
            const recipes = await Recipe.find();
            res.json(recipes);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'You have encountered errors'});
        }
    },

    async getOneRecipe(req, res) {
        try {
            const { id } = req.params;
            const recipe = await Recipe.findById(id);
            if (!recipe) {
                return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'You have encountered errors'});
        }
    },

    async saveRecipe(req, res) {
        try {
            // come back to this later after looking at models folder
            // need to incorporate save method information
            const { userId, recipeId } = req.body;
            res.json({ message: 'Recipe saved successfully' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'You have encountered errors'});
        }
    }
};