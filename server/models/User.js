const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const recipeSchema = require('./Recipe');

const userSchema = new Schema(
    {
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
        cookBooks: [recipeSchema],
    },

    {
        toJSON: {
            virtuals: true,
        },
       
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.virtual('recipeCount').get(function () {
    return this.cookBooks.length;
});

const User = model('User', userSchema);

module.exports = User;
