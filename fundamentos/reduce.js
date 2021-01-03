const alunos = [
    {nome: "João", nota: 8.7, bolsista:true},
    {nome: "John", nota: 8.7, bolsista:true},
    {nome: "Maria", nota: 8.7, bolsista:false},
    {nome: "Kepner", nota: 8.7, bolsista:true},
    {nome: "Eleanor", nota: 8.7, bolsista:false},
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    return acumulador+atual
}, 20)

console.log(resultado)

const resultado2 = alunos.map(a => a.nome).reduce(function(acumulador, atual){
    return acumulador+" "+atual
},"Nome dos alunos são:")

console.log(resultado2)