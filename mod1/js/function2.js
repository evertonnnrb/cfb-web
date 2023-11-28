const f = function(...valores){
    let v = 0
    for(elements of valores)
        v += elements
    return v
}

const x = new Function("x1","x2","return x1+x2")

console.log(f(10, 10))
console.log(x(60,40))