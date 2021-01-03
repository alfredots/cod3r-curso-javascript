const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h.`
    }
}

const ferrari = {
    modelo: "V40",
    velMax: 340
}

const volvo = {
    modelo: "M50",
    velAtual: 50,
    status(){
        return `${this.velAtual} de ${super.velMax}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari.status())
ferrari.acelerarMais(100)
console.log(ferrari.status())
ferrari.acelerarMais(400)
console.log(ferrari.status())
console.log(volvo.status())