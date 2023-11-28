const soma = (...valores) => {
    const somar= val=>{
        let res = 0
        for(values of valores)
            res += values
        return res
    }
    return somar(valores)
}

console.log(soma(10,20,20))