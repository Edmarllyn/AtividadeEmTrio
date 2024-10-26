//função que altera as a cor de fundo e do texto para garantir contraste.

function trocarCor() {
    //verica a cor atual do fundo 
    if (document.body.style.backgroundColor === "black") {
        //se estiver preto, muda para branco e altera o texto para preto
        document.body.style.backgroundColor = "rgb(82, 82, 82)";
        document.body.style.color = "black";

        //atualiza o texto do botão para indicar o "Modo Escuro"
        document.getElementById("toggleButton").textContent = "Modo Escuro";
    } 
    else{
        //se estiver branco, mudara para preto e o texto para branco
        document.body.style.backgroundColor = "black";
        document.body.style.color = "rgb(82, 82, 82)";


        //atualizado o texto do botão para indicar o "modo claro"
        document.getElementById("toggleButton").textContent = "Modo Claro";
    }
}