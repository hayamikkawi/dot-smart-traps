const express = require('express')
const router = express.Router()
const { getDevices, getDeviceById } = require('../../controllers/deviceController')

// call the suitable function based on the path
router.get('/', getDevices)
router.get('/:id', getDeviceById)

module.exports = router;