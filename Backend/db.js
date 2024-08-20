const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rakshesanket67:Sanket%40123@payments-app.uzeos.mongodb.net/");
console.log("Connected to MongoDB");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 100
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 50
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 50
    }
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User: User
}