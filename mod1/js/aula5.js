const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]

objs2.forEach(el =>{
    el.innerHTML="Chupa curintia "
})

console.log(objs1)
console.log(objs2)