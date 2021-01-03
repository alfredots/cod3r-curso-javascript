const carrinho = [
    '{"nome": "Just Dance 2019", "preco": 130.00}',
    '{"nome": "Far Cry 3", "preco": 35.75}',
    '{"nome": "Pokemon White", "preco": 90.45}',
    '{"nome": "Persona 5", "preco": 170.56}',
    '{"nome": "Ace Attorney", "preco": 80.56}'
]

let precos = carrinho.map(function(e){
    return JSON.parse(e).preco
})

console.log(precos)
