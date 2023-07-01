const Address = require('../models/address-model')



createAddress = async (req, res) =>  {
  const body = req.body
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a address',
    })
  }
  const address = new Address(body)

  if (!address) {
    return res.status(400).json({ success: false, error: err })
  }

    try{
      await address.save()
    }
    catch(err){
      return res.status(400).json({
        err,
        message: 'Address not created!',
      })
    }
    return res.status(201).json({
      success: true,
      id: address._id,
      message: 'Address created!',
    })

}

updateAddress = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    })
  }
  let address = null;
  try{
    address = await Address.findOne({ _id: req.params.id })
  }
  catch(err){
    return res.status(404).json({
      err,
      message: 'Address not found!',
    })
  }
    if(!address){
      return res.status(404).json({
        err,
        message: 'Address not found!',
      })
    }
    address.address_line1 = body.address_line1
    address.address_line2 = body.address_line2
    address.address_line3 = body.address_line3
    try{
      await address.save()
    }
    catch(err){
      return res.status(404).json({
        err,
        message: 'Address not updated!',
      })
    }
    return res.status(200).json({
      success: true,
      id: address._id,
      message: 'Address updated!',
    })

  }


deleteAddress = async (req, res) => {

  let address = {};
  try {
    address = await Address.findOneAndDelete({ _id: req.params.id });
  }
  catch (err) {
    return res.status(400).json({ success: false, error: err })
  }

  return res.status(200).json({ data: user })
}


getAddressById = async (req, res) => {
  let address = {};
  try {
    addresses = await User.findOne({ _id: req.params.id });
  }
  catch (err) {
    return res.status(400).json({ success: false, error: err })
  }

  return res.status(200).json({ data: addresses })
}


getAddresses = async (req, res) => {
  let address = {};
  try {
    address = await Address.find({});
  }
  catch (err) {
    return res.status(400).json({ success: false, error: err })
  }

  return res.status(200).json({ address })
}

module.exports = {
  createAddress,
  updateAddress,
  deleteAddress,
  getAddressById,
  getAddresses,
}
