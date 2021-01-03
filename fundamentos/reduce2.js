const alunos = [
    {nome: "João", nota: 8.7, bolsista:true},
    {nome: "John", nota: 8.7, bolsista:true},
    {nome: "Maria", nota: 8.7, bolsista:false},
    {nome: "Kepner", nota: 8.7, bolsista:true},
    {nome: "Eleanor", nota: 8.7, bolsista:false},
]

//Desafio 1: todos os alunos são bolsistas?
console.log("Todos os alunos são bolsistas?")
console.log(alunos.map(a => a.bolsista).reduce((acumulador, atual) => acumulador = acumulador && atual))

//Desafio 2: Algum aluno é bolsista?
console.log("Algum aluno é bolsista?")
console.log(alunos.map(a => a.bolsista).reduce((acumulador, atual) => acumulador = acumulador || atual))