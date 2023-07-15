const mongoose = require('mongoose')
const Schema = mongoose.Schema



const addressSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  addressLine1:{ type: String, required: true },
  addressLine2:{ type: String, required: true },
  state:{ type: String, required: true },
  country:{ type: String, required: true },
  postalCode: { type: Number, required: true },

},
{ timestamps: true },
);




module.exports = mongoose.model('address', addressSchema)
