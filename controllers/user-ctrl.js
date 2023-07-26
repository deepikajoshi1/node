const {User, Address} = require('../models/user-model')



createUser = async (req, res) =>  {
  const body = req.body
  console.log(body);
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user',
    })
  }
  const user = new User(body)
  const addressArray = body.address

  if (!user) {
    return res.status(400).json({ success: false, error: err })
  }

    try{
      await user.save()
      // Check if u have address
      // if yes, then loop through the addressArray
      // create address obj from schema, make sure that user linkage is done
      // save all the address objects in db
      // wrire code for address update and delete.
      // if user is  deleted addresses will also be deleted

      // Check if there are addresses to be created

      if(addressArray && addressArray.length>0){
        addressArray.map(async addressData => {
          const address = new Address({
          addressLine1: addressData.addressLine1,
          addressLine2: addressData.addressLine2,
          state: addressData.state,
          country: addressData.country,
          postalCode: addressData.postalCode,
          // make sure that user linkage is done
          user: user._id,
          });
          await address.save();
        })
      }
}
    catch(err){

      return res.status(400).json({
        err,
        message: 'User not created!',
      })
    }
    return res.status(201).json({
      success: true,
      id: user._id,
      message: 'User created!',
    })

}

updateUser = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    })
  }
  let user = null;
  try{
    user = await User.findOne({ _id: req.params.id })
  }
  catch(err){
    return res.status(404).json({
      err,
      message: 'User not found!',
    })
  }
  console.log(user)
    if(!user){
      return res.status(404).json({
        err,
        message: 'User not found!',
      })
    }


    user.salutation = body.salutation
    user.firstName = body.firstName
    user.lastName = body.lastName
    user.dateOfBirth = body.dateOfBirth
    user.gender = body.gender
    user.email = body.email
    try{
      user = await user.save()
    }
    catch(err){
      return res.status(404).json({
        err,
        message: 'User not updated!',
      })
    }
    console.log('update user', user)
    return res.status(200).json({
      success: true,
      id: user._id,
      message: 'User updated!',
    })

  }


deleteUser = async (req, res) => {

  let user = {};
  try {
    user = await User.findOneAndDelete({ _id: req.params.id });
  }
  catch (err) {
    return res.status(400).json({ success: false, error: err })
  }

  return res.status(200).json({ data: user })
}


getUserById = async (req, res) => {
  let user = {};
  try {
    user = await User.findOne({ _id: req.params.id });
  }
  catch (err) {
    return res.status(400).json({ success: false, error: err })
  }

  return res.status(200).json({ user })
}


getUsers = async (req, res) => {
  let users = {};
  try {
    users = await User.find({});
  }
  catch (err) {
    return res.status(400).json({ success: false, error: err })
  }

  return res.status(200).json({ users })
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
}
