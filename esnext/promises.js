function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Integrantes do loona 1/3: ')
    .then(frase => frase.concat('Heejin '))
    .then(frase2 => frase2.concat('HyunJin '))
    .then(frase3 => frase3.concat('HaSeul '))
    .then(frase4 => frase4.concat('Vivi '))
    .then(frase5 => console.log(frase5))
    .catch(e => console.log('deu merda'))