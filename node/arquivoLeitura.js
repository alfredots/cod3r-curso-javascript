const fs = require('fs')

const caminho = __dirname + "/arquivo.json"

//sincrono..
const conteudo = fs.readFileSync(caminho, "utf-8")

//assincrono..
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

fs.readdir(__dirname, (err, arquivos)=>{
    console.log('Conteúdo da pasta')
    console.log(arquivos)
})