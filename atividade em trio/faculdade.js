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

// $(document).ready: função que garante que o codigo dentro dela execute 
//somente apos o html completo da pagina esta carregado

$(document).ready(function(){
    
    //seleciona o conteiner .carousel e aplica a função slick()
    //que ativa o carousel com as configurações abaixo
    $('.produtos-pai').slick({
        
        //slidestoshow: número de cards exibidos ao mesmo tempo no carousel
        slidesToShow:3, // Exibe 3 cards ao mesmo tempo

        //slideToscroll:define quantos cards serão deslizados ao mover o carousel
        slidesToScrool:3, // mover 1 card por vez ao deslizar

        // infinite: quando true, o carrosel retorna ao inicio automaticamente 
        infinite:true, // matem o carrosel em rotação continua 

        //dots: quando true, ativa os produtos de navegação abaixo do carrosel
        dots:true, // adiciona pontos de navegação para os usuarios

        //arrows: exibe setas de navegação nas laterais do carousel
        arrows:true // Ativa as setas para navegar entre os cards
    }) ;
});



// Inicializando o efeito ScrollReveal na primeira seção (#section1)

ScrollReveal().reveal('#section-1', {
    duration: 2000, // Duração do efeito (em millisegundos), define a velocidade da transição
    origin: 'bottom', //Origem do efeito: o conteudo virá de baixo para cima
    distance: '50px', //Distancia que o elemento "viaja" antes de aparecer
});

// Configurando o efeito ScrollReveal na segunda seção (#section2)
ScrollReveal().reveal('#section-2', {
    duration: 1000, // Duração do efeito de revelação
    origin: 'right', //Origem do efeito: o conteudo virá da direita para a esquerda
    distance: '50px', //Distancia do movimento antes do elemento se revelar
});


const typed = new Typed('#Typed-text', {
    strings: ['EducaBank', 'EducaBank'],
    typedSpeend: 50,
    backSpeed: 25,
    loop: true,
    showCursor: false,
    fadeOut: true,
});

// $(document).ready: função que garante que o codigo dentro dela execute
//Somente apos HTML completo da pagina esta carregando

$(document).ready(function() {

    // Seleciona o container .carousel e aplica a função slick()
    // Que ativa o carrossel com as configuraçoes abaixo
    $('.carousel').slick({

        //slidesToshow: número de cards exibidos ao mesmo tempo no carrossel
        slidesToShow: 3,  //Exibe 3 cards ao mesmo tempo


        //SlidesToScroll: define quantos cards serão deslizados ao mover o carrossel
        slidesToScroll: 1, //Move 1 card por vez ao deslizar

        //Infinite: quando true, o carrossel retorna ao inicio automaticamente
        infinite: true, //Mantém o carrossel em rotação continua

        //dots: quando true, ativa os pontos de navegação abaixo do carrosel
        dots: true, //Adiciona pontos de navegação para os usuarios

        // arrows: exibe setas de navegação nas laterais do carrosel
        arrows: true //Ativa as setas para navegar entre os cards

    });
});