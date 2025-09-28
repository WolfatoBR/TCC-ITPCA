const express = require('express')
const {liberar} = require('../app/controllers/authController')

const router = express.Router()

router.post('/login', liberar)

module.exports = router
