const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        salutation: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        dateOfBirth: { type: Number,  required: true },
        gender: { type: String, required: true },
        email: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)
