//declaração/criando função tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom')
}

//chamando/invocando a função tocaSomPom pelo clique do botão
Document .querySelector('.tecla_pom'). onclick = tocaSomPom;

//referência constante listaDeTeclas, bucando todos os botões 
const listaDeTeclas = document.querySelectorAll('tecla');

//chamando a função tocaSomPom pelo item "0" da listaDeTecla
listaDeTeclas[0].onclick = tocaSomPom;

let contador = 0;
while(contador< 9){
listaDeTecla[contador] .onclick = tocaSomPom;  
}