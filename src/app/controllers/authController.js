const Usuario = require('../model/cadastro')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const SECRET = process.env.SECRET
if(!SECRET) {
    console.error("FATAL: JWT SECRET não definido em process.env.SECRET")
    process.exit(1)
}

exports.liberar = async (req, res) => {
    try {
        const { email, passworld } = req.body

        if (!email || !passworld) {
            return res.status(400).json({
                statusCode: 400,
                message: 'Email e senha são obrigatórios.'
            })
        }

        const usuario = await Usuario.findOne({ where: { email } })

        if (!usuario) {
            return res.status(401).json({
                statusCode: 401,
                message: 'Credenciais inválidas.'
            })
        }

        const validacao = await bcrypt.compare(passworld, usuario.passworld)
        if(!validacao) {
            return res.status(401).json({
                statusCode:401,
                message: "Não autorizado"
            })
        }

        const payload = {
            sub: usuario.id,
            email: usuario.email
        }

        const token = jwt.sign(payload, SECRET, { expiresIn: '8h' })

        return res.status(200).json({
            statusCode: 200,
            message: "Login realizado com sucesso",
            data: {
                token
            }
        })
    } catch(error) {
        console.error(error)
        return res.status(500).json({
            statusCode: 500,
            message: 'Erro interno do servidor'
        })
    }
}