const cadastroController = require('../app/controllers/cadastroController.js')
const verificarToken = require('../app/middleware/auth')
const express = require('express')

const router = express.Router();

router.post('/', cadastroController.cadastro)

router.post('/rotaAutenticada', verificarToken, (req, res) => {
    res.json({ message: 'Acesso permitido', usuario: req.usuario })
});

module.exports = router;