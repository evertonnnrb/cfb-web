const sum = (x1, x2)=>{
    return x1 +x2
}
const sub = (x1, x2)=>{
    return x1 -x2
}
const divide = (x1, x2)=>{
    if(x1 != 0){
        return x1 / x2
    
    }
    
}
const mult = (x1, x2)=>{
    return x1 * x2
}
const mod = (x1,x2)=>{
    return  (x1 * x2) % 2 ? false : true
}


console.log(sum(10, 10))
console.log(sub(10, 10))
console.log(divide(0, 10))
console.log(mult(10, 10))
console.log(mod(1,3))