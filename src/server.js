const index = require('./index')
const sequelize = require('./app/config/database')
const PORT = 666

sequelize.sync({ force:true })
.then (() => {
    console.log('✅ Conexão com MySQL bem sucedida !')
    index.listen(PORT, () => {
        console.log(`Servidor rodando na porta: 127.0.0.1:${PORT}/`);
    })
})
.catch((error) => {
    console.error('❌ Erro ao conectar com o banco de dados: ', error)
})
