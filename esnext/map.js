/*
const tecnos = new Map()
tecnos.set('react', {framework:true, version:'1.0.2'})
tecnos.set('angular', {framework:false, version:'2.0.1'})
tecnos.set('vue', {framework:true, version:'1.2.3'})
tecnos.set('native', {framework:false, version:'0.0.2'})
tecnos.set('native', 'woeirweioh')

tecnos.forEach(function(vl, key){
    console.log(`chave: ${key} : valor ${vl}`)
})
*/

const nums = [1,2,3,4,5,3,124,4,215,12,3,213,13,1,132,1,132]
for (letra of "I wanna full moon!!"){
    console.log(letra)
}

for (num of nums){
    console.log(num)
}

const assuntos = new Map()
assuntos.set('historia da rv', {terminado:true})
assuntos.set('I/O da rv', {terminado:true})
assuntos.set('Unity na rv', {terminado:false})

for (let [ch,vl] of assuntos){
    console.log(ch,':',vl)
}
