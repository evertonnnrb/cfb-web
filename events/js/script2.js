console.log('WORK BITCH')

const divCursos = [...document.querySelectorAll('.curso')]
const btn = document.querySelector('#btn_copiar')
const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')

const novoElemento = document.createElement("div")
novoElemento.setAttribute('id','x7')
novoElemento.setAttribute('class','curso x1')
novoElemento.innerHTML='Java'

caixa1.appendChild(novoElemento)

const linguagens = ["C#", "c++"]

linguagens.map((el,key)=>{
    
    const newElement = document.createElement('div')
    newElement.setAttribute('id','x'+key)
    newElement.setAttribute('class','curso x1')
    newElement.innerHTML = el

    const btnLixeira = document.createElement('img')
    btnLixeira.setAttribute('src','../../img/tras2.png')
    btnLixeira.setAttribute('class','btn_lixeira')
    
    newElement.appendChild(btnLixeira)

    btnLixeira.addEventListener('dblclick',(evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })

    caixa1.appendChild(newElement)
})


divCursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso = evt.target
        curso.classList.toggle('selecionar')
    })
})


btn.addEventListener('click',()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionar')]
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionar)')]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})


