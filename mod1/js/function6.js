function* cores(){
    yield 'VERMELHO'
    yield 'VERDE'
    yield 'AZUL'
}

function* perguntas(){
    const nome = yield 'Qual e o seu nome'
    const dia = yield 'Que dia e hoje?'
    return 'Olá '+nome+' hoje é dia '+dia 
}

const ite = cores()
const itPerguntas = perguntas()

console.log(ite.next().value)
console.log(ite.next().value)
console.log(ite.next().value)
console.log(itPerguntas.next().value)
console.log(itPerguntas.next('Everton').value)
console.log(itPerguntas.next('12/11/2023').value)