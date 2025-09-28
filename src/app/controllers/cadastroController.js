const Usuario = require('../model/cadastro')
const bcrypt = require('bcrypt')

exports.cadastro = async (req, res) => {
    const {email, userName, senha} = (req.body)
    if(!email || !userName || !senha) {
        return res.status(400).json({message: "Todos os campos devem ser preenchidos !"})
    }
    try {
        const verificarExistente = await Usuario.findOne({ where: {email} }).catch(()=> null)
        if(verificarExistente) return res.status(409).json({message: 'Este email já existe !'});

        const saltRounds = 10;
        const hash = await bcrypt.hash(senha, saltRounds)

        const novoUsuario = await Usuario.create({email, userName, senha: hash})

        res.status(201).json({id: novoUsuario.id})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Erro interno do servidor'})
    }
}