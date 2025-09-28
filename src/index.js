const express = require('express')
const authRouter = require('./routes/authRouter')
const cadastroRouter = require('./routes/cadastroRouter')

const app = express()

app.use(express.json())
app.use('/login', authRouter)
app.use('/cadastro', cadastroRouter)

module.exports = app;