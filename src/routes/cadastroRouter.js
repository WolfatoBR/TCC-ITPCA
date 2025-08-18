const express = require('express')
const {adicionar} = require('../app/controllers/cadastroController')

const router = express.Router()

router.get('/cadastrar-usuario', adicionar)

module.exports = router