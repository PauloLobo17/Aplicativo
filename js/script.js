//dom
const nome = document.querySelector('#nome')
const uni1 = document.querySelector('#uni1')
const uni2= document.querySelector('#uni2')
const uni3 = document.querySelector('#uni3')
const uni4 = document.querySelector('#uni4')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')

//event
botao.addEventListener('click',estudar)

//funçao

function estudar(){
 no= (nome.value)
 u1 = Number(uni1.value)
 u2 = Number(uni2.value)
 u3 = Number(uni3.value)
 u4 = Number(uni4.value)
 
 
media=(u1+ u2+ u3+ u4) / 4;

if (media>=6) {
    resultado.textContent =(`Sr(a)${no}A sua média final é ${media.toFixed(2)} Você foi aprovado`)
}else{
    resultado.textContent=(`Sr(a)${no} A sua média final é ${media.toFixed(2)} Você foi reprovado`) 

}
}