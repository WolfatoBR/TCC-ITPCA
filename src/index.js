const express = require('express')
const router = require('./routes/cadastroRouter')

const app = express()

app.use(express.json())
app.use(router)

module.exports = app;