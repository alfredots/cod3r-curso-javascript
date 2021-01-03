Array.prototype.map2 = function(callbck){
    let array = []
    for(let i = 0; i < this.length; i++){ 
        array.push(callbck(this[i], i, this))
    }
    return array
}

const carrinho = [
    '{"nome": "Just Dance 2019", "preco": 130.00}',
    '{"nome": "Far Cry 3", "preco": 35.75}',
    '{"nome": "Pokemon White", "preco": 90.45}',
    '{"nome": "Persona 5", "preco": 170.56}',
    '{"nome": "Ace Attorney", "preco": 80.56}'
]

let precos = carrinho.map2(function(e){
    return JSON.parse(e).preco
})

console.log(precos)