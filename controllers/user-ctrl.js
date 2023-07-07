const User = require('../models/user-model')



createUser = async (req, res) =>  {
  const body = req.body
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user',
    })
  }
  const user = new User(body)

  if (!user) {
    return res.status(400).json({ success: false, error: err })
  }

    try{
      await user.save()
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
    user.email = body.email
    try{
      await user.save()
    }
    catch(err){
      return res.status(404).json({
        err,
        message: 'User not updated!',
      })
    }
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
