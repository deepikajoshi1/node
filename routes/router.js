const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')
const AddressCtrl = require('../controllers/address-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)


// router.post('/address', AddressCtrl.createAddress)
// router.put('/address/:id', AddressCtrl.updateAddress)
// router.delete('/address/:id', AddressCtrl.deleteAddress)
// router.get('/address/:id', AddressCtrl.getAddressById)
// router.get('/address', AddressCtrl.getAddresses)

module.exports = router
