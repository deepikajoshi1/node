const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Address = require('./address-model')

const userSchema = Schema(
    {
        salutation: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        dateOfBirth: { type: Date,  required: true },
        gender: { type: String, required: true },
        email: { type: String, required: true },
        addresses: [{ type: Schema.Types.ObjectId, required: false, ref: "Address" } ]
    },
    { timestamps: true },
    );

// const addressSchema = Schema({
//   user: { type: Schema.Types.ObjectId, ref: "User" },
//   addressLine1:{ type: String, required: true },
//   addressLine2:{ type: String, required: true },
//   state:{ type: String, required: true },
//   country:{ type: String, required: true },
//   postalCode: { type: Number, required: true },

// });

// const Address = mongoose.model("Address", addressSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
  Address: Address,
  User: User
};
