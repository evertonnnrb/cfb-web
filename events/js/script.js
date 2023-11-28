console.log('WORK BITCH')

const msg = ()=>{
    alert("ALERT")
}

c1.addEventListener('click',msg)

const c2 = document.querySelector('#c2').addEventListener('click',()=>{
    alert('Clicou')
})

console.log(event)
const c3 = document.querySelector('#c3').addEventListener('click',(event)=>{
    const el = event.target
    el.classList.add("funcao")
})

const cursos = [...document.querySelectorAll('.todo')]
cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const evento = evt.target
        el.classList.add('funcao')
        console.log(el.id+" foi clicado")
        console.log(el.innerHTML+" foi clicado")
    })
  
})
