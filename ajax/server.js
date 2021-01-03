const bodyParser  = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single("arquivo")
app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro')
        }

        res.end('Concluído com sucesso')
    })
})

const users = []
const value = 1
const unique = () => value+1
app.post('/formulario', (req, res) => {
    users.push({
        ...req.body,
        id: value
    })
    unique()
    res.send(JSON.stringify(users))
})

app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({resultado:par})
})

app.get('/teste', (req, res) => res.send('Ok'))
app.listen(3000, ()=>console.log('Executando...'))