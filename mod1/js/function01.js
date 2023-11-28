function msg() {
  console.log("Palmeira não tem mundial");
}
function msg2() {
  console.log("Não tem copinha");
}
let x = 0;
while (x < 10) {
  msg()
    if(x % 2 == 0){
        msg2()
    }
  x++;
}
function soma(...val){
    let res = 0
    for(let v of val){
        res += v    
    }
    return res
}

console.log(soma(1,2,3))