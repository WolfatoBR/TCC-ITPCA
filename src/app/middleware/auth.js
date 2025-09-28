const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config();

const SECRET = process.env.SECRET

if (!SECRET) {
  console.error('FATAL: JWT SECRET não definido em process.env.SECRET')
  process.exit(1)
}

const verificarToken = (req, res, next) => {
    const tokenHeader = req.headers["authorization"]
    const token = tokenHeader && tokenHeader.split(" ")[1]

    if(!token) {
        res.status(401).json({
            statusCode:401,
            message: "Não autorizado"
        })
    }
    try {
        const payload = jwt.verify(token, SECRET)
        req.usuario = payload
        return next()
    } catch (error) {
        console.error('JWT verify error: ',error);
        if(error.name === 'TokenExpiredError') {
            return res.status(401).json({
                statusCode: 401,
                message: 'Token expirado.'
            })
        }
        return res.status(403).json({
            statusCode: 403,
            message: "Token inválido"
        })
    }
}

module.exports = verificarToken;