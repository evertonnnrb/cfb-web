console.log('WORK BITCH')

const divCursos = [...document.querySelectorAll('.curso')]
const btn = document.querySelector('#btn_copiar')
const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')

divCursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso = evt.target
        //console.log(curso)
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


