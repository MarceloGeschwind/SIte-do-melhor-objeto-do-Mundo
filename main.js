const botao = document.getElementById('altfundo')
const botaot = document.getElementById('altfundot')
const fundo = document.body

botao.onclick = function(){
    fundo.style.color = "green"
    fundo.style.backgroundColor = "red"
    alert('Alterando')
}

botaot.onclick = function(){
    fundo.style.color = "Black"
    fundo.style.backgroundColor = "white"
    alert('Alterando') 
}

botao.style.color = "green"
botao.style.backgroundColor = "yellow"