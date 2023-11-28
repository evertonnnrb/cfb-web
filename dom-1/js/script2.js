const classCollection = [...document.getElementsByClassName("todo")]
const classC1 = [...document.getElementsByClassName("c1")]
const classC2 = [...document.getElementsByClassName("c2")]

classC2.map((e=>{
    e.classList.add('destaque')
}))


console.log(classCollection)
console.log(classC1)
console.log(classC2)