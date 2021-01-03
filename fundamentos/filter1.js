const produtos = [
    {nome: 'PSP', preco: 130, fragil: true},
    {nome: '3DS', preco: 13.54, fragil: false},
    {nome: 'Switch', preco: 111.222, fragil: true},
    {nome: 'Wii', preco: 332.12, fragil: false},
    {nome: 'PS4', preco: 242.3, fragil: true},
]

console.log(produtos.filter(function (p){
    return p.fragil === true
}))

const caro = (p) => p.preco > 200
const fragil = (p) => p.fragil === true

console.log(produtos.filter(caro).filter(fragil))