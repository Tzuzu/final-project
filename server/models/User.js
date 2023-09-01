const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { hash, compare } = require('bcryptjs');
const recipeSchema = require('./Recipe');

const userSchema = new Schema({
    
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        cookBooks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Recipe',
            },
        ]
    
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.comparePassword = async function (password) {
    return await compare(password, this.password);
};

userSchema.virtual('recipeCount').get(function () {
    return this.cookBooks.length;
});

const User = model('User', userSchema);

module.exports = User;