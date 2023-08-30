const db = require('../config/connection');
const { Recipe, User } = require('../models');
const recipeData = require('./recipeData.json');
const userData = require('./userData.json');

db.once('open', async () => {
    try {
        await Recipe.deleteMany({});
        await User.deleteMany({});

        await Recipe.create(recipeData);
        await User.create(userData);

    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Successfully Seeded!');
    process.exit(0);
})