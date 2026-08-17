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

fetch("https://fakestoreapi.com/products/1")
    .then(response => response.json())
    .then(data => {

        document.getElementById("api-produto").innerHTML = `
            <div class="card">
                <img src="${data.image}">
                <h3>${data.title}</h3>
                <p>${data.description}</p>
                <h4>R$ ${data.price}</h4>
            </div>
        `

    })