const Empresa = require('../model/cadastro')

module.exports.adicionar = async (req, res) => {
    const {empresa, socio, cpf, cnh, rg, estadoCivil, profissao, endereco, filiacao} = req.body

    if(!empresa || !socio || !cpf || !cnh || !rg || !estadoCivil || !profissao || !endereco || !filiacao) {
        return res.status(401).json({message: 'Todas os campos devem ser preenchidos'})
    }
    
    try {
        const novoUsuario = new Empresa({empresa, socio, cpf, cnh, rg, estadoCivil, profissao, endereco, filiacao})
        novoUsuario.save()
        res.status(200).json({ message: 'Usuario cadastrado com sucesso !!'})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ error: 'Erro ao cadastrar usuario.'})
    }
}
