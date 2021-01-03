const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const _axios = require('axios')

_axios.get(url).then(response => {
    const funcionarios = response.data
    
    const mulheres = f => f.genero === 'F'
    const chinesa = f => f.pais === 'China'
    const menorSalario = (menor, atual) => {
        return atual.salario < menor.salario ? atual : menor
    }

    const menosPaga = funcionarios
        .filter(mulheres)
        .filter(chinesa)
        .reduce(menorSalario)

    console.log(menosPaga)
})