const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bd = require('./bancoDeDados')

//qualquer requisição dispara esse middleware
app.use(bodyParser.urlencoded({extended:true}))

app.get('/produtos', (req, res, next) => {
    res.send(bd.getProdutos()) //converte para json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bd.getProduto(req.params.id)) //converte para json
})

app.delete('/produtos/:id', (req, res, next) => {
    res.send(bd.excluirProduto(req.params.id)) //converte para json
})

app.post('/produtos', (req, res, next) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bd.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, ()=>{
    console.log('servidor on')
})