const { user } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    async createUser(req, res) {
        try {
            const { username, email, password } = req.body;

        // this will check to see if the user already exists
        const existingUser = await user.findOne({  email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // this will create a new user
        const newUser = await user.create({
            username,
            email,
            password
        });

        // this generates a token
        const token = signToken(newUser);

        // this will return the token to the user
        res.status(201).json({ user: newUser, token });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'You have encountered an error' });
        }
    },

    async loginUser(req, res) {
        try {
            const { email, password } = req.body;
    // find the user by their email
            const user = await user.findOne({ email });

    // if the user is not found or password invalid then return an error
        if (!user ||!user.checkPassword(password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    // this generates a token
        const token = signToken(user);

    // return the token to the user
    res.json({ user, token });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'You have encountered an error' });
        }
    },
}