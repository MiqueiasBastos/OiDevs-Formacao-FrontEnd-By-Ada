const spanContador = document.querySelector("#contador")
const botaoIncrementar = document.querySelector("#incrementar")
const botaoDecrementar = document.querySelector("#decrementar")
const botaoZerar = document.querySelector("#zerar")

spanContador.style.padding = '5px'
spanContador.style.display = 'block'
spanContador.style.width = '50px'
spanContador.style.height = '50px'
spanContador.style.borderRadius = '50%'

spanContador.style.color = 'white'
spanContador.style.fontWeight = 'bold'
spanContador.style.textAlign = 'center'
spanContador.style.lineHeight = '50px'
spanContador.style.fontSize = '30px'

botaoIncrementar.addEventListener('click', ()=>{
    spanContador.innerHTML = parseInt(spanContador.innerHTML) + 1;
    mudarCor();
})

botaoDecrementar.addEventListener('click', ()=>{
    spanContador.innerHTML = parseInt(spanContador.innerHTML) - 1;
    mudarCor();
})

botaoZerar.addEventListener('click', ()=>{
    spanContador.innerHTML = 0;
    mudarCor();
})

function mudarCor(){
    const contador = parseInt(spanContador.innerHTML)
    if(contador === 0){
        spanContador.style.backgroundColor = 'blue'
    } else if(contador > 0){
        spanContador.style.backgroundColor = 'green'
    } else if(contador < 0){
        spanContador.style.backgroundColor = 'red'
    }
}

mudarCor()