const escola = [
    {nome: 'Turma A1',
    alunos: [{nome: 'Gus', nota: 9}, 
            {nome: 'Tes', nota: 8.2},
             {nome: 'Yue', nota: 7.7}]
    },
    {nome: 'Turma A2',
    alunos: [{nome: 'Alex', nota: 7.2}, 
            {nome: 'Ted', nota: 6},
             {nome: 'Nile', nota: 8.8}]
    },
]

const getAlunoNota = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getAlunoNota)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function (callbck){
    return Array.prototype.concat.apply([], this.map(callbck))
}

console.log(escola.flatMap(getNotasDaTurma))