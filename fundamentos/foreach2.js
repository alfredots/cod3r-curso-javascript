function ForEach(){

    let array = []

    this.push = (item) => array.push(item)

    this.pop = (item) => array.pop(item)

    this.getArray = () => array

    this.eachfor = function(functionback){
        for(let i in array){
            functionback(array[i], i)
        }
    }
}

const loop = new ForEach

loop.push('Hyolin')
loop.push('JinJin')
loop.push('Jimin')
loop.push('Suga')

loop.eachfor(function(nome, index){
    console.log(`${index}) ${nome}`)
})

console.log(loop.getArray())


Array.prototype.forEach2 = function(functionback){
    
    for(let i = 0 ; i < this.length; i++){
        functionback(this[i], i, this)
    }
}

let songs = ['All Night', 'La La Love', 'Gotta Go', 'Sunrise']


songs.forEach2(function(song, index){
    console.log(`${index}) ${song}`)
})