const botao = document.getElementById("botao");

botao.onclick = function(){
        alert("Alterando para o modo escuro!");
        document.getElementById("body").style.color = "white";
        document.getElementById("body").style.backgroundColor = "black";
    };

const traduzir = document.getElementById("botaot");

traduzir.onclick = function(){
        alert("TRADUZINDOO!");
        document.getElementById("body").replace("inicio") = ("The Fidget Spinner is a handheld toy designed to spin quickly around a central axis. Its design has three or more arms with bearings that allow for smooth and long-lasting rotation. Besides being fun, many people use the Fidget Spinner as a way to relieve stress, improve concentration, and keep their hands busy during moments of anxiety or boredom. Released on a large scale around 2017, it became a worldwide craze among children, teenagers, and adults. Today, there are many different models, colors, and materials, making the toy not only a pastime but also a collectible item for many fans.The Fidget Spinner is a small toy designed to be held and spun with the fingers. It has a central axis with bearings that allow its arms to spin smoothly and quickly. There are many different models, with various shapes, colors, and materials. Besides being fun to use, its compact size makes it easy to carry, making it a simple object for passing the time and keeping your hands busy.")
    };