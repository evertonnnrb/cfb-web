const jogador1 = {nome: 'Bruce', vidas : 5, forca :10, magia : -1}
const jogador2 = {nome: 'Mario', vidas : 3, forca : 1, velocidade : 200}
const jogador3 = {...jogador1, ...jogador2}

const soma = (v1, v2, v3)=>{
    return v1 + v2 + v3
}

let valores = [22, 22, 56]
console.log(jogador3)
console.log(soma(10,50,40))
 console.log(soma(...valores))