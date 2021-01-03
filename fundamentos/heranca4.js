String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('salnorabo'.reverse())

function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula("Dance Video", 32424)
console.log(aula1)

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula2 = novo(Aula, "Mv dance", 234234)
console.log(aula2)