const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Address= new Schema(
    {
        address_line1: { type: String, required: true },
        address_line2: { type: String, required: true },
        address_line3: { type: String, required: true },

    },
    { timestamps: true },
)

module.exports = mongoose.model('address', Address)
