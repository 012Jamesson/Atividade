var url = window.location.href; 
var parametroDaUrl = url.split("?")[1];
user = sessionStorage.getItem(parametroDaUrl)
var objeto = JSON.parse(user);
var frase = "Hi, my name is";
var variavel = objeto.nome;

text = "<div>"
          +"<img class='img' src='."+objeto.foto+"''  style='width:20%'/>"
          +" </div>"
    img = document.getElementById("img");
    img.innerHTML = text; 

text2 = "<div>"
        +"<div class='icons'>"
        +"<i id='nome' class='far fa-user w3-xxlarge '></i>"
        +"<i id='mail' class='far fa-envelope w3-xxlarge'></i>"
        +"<i id='aniversario' class='far fa-calendar-alt w3-xxlarge'></i>"
        +"<i id='endereco' class='fas fa-map-marked-alt w3-xxlarge'></i>"
        +"<i id='phone' class='fas fa-phone w3-xxlarge'></i>"
        +"<i id='situacao' class='fas fa-key w3-xxlarge'></i>"
      +"</div>"
  +"</div>"
  html = document.getElementById("html");
      html.innerHTML = text2; 
function criarVariavel(frase, variavel){
text3 = "<div>"
            +"<p class='label'>"+frase+"</p>"
            +"<h4 class='variavel'><b>"+variavel+"</b></h4>"
        +"</div>"
info = document.getElementById("info");
info.innerHTML = text3;
} 

      var nome = document.getElementById("nome");
      var mail = document.getElementById("mail");
      var aniversario = document.getElementById("aniversario");
      var phone = document.getElementById("phone");
      var situacao = document.getElementById("situacao");
 
      nome.addEventListener("mouseenter", function ( event) {   
        frase = "Hi, my name is";
        variavel = objeto.nome;
      
        event.target.style.color = "#aeba4e";
        criarVariavel(frase, variavel)
        nome.addEventListener("mouseleave", function( event) {
            event.target.style.color = "#858b8f";
          }, );
      }, false);
      
      mail.addEventListener("mouseover", function( event) {   
        frase = "My email address is";
        variavel = objeto.email;
      
        event.target.style.color = "#aeba4e";
        criarVariavel(frase, variavel)
        mail.addEventListener("mouseleave", function( event) { 
            event.target.style.color = "#858b8f";
          }, );   
      }, false);
        
      aniversario.addEventListener("mouseover", function( event) {   
        frase = "My birthday is";
        variavel = objeto.dataNascimento;
    
        event.target.style.color = "#aeba4e";
        criarVariavel(frase, variavel)
        aniversario.addEventListener("mouseleave", function( event) { 
            event.target.style.color = "#858b8f";
          }, );
      }, false);
  
      phone.addEventListener("mouseover", function( event) {   
        frase = "My phone number is";
        variavel = objeto.telefone;
    
        event.target.style.color = "#aeba4e";
        criarVariavel(frase, variavel)
        phone.addEventListener("mouseleave", function( event) { 
            event.target.style.color = "#858b8f";
          }, );
      }, false);

      endereco.addEventListener("mouseover", function( event) {   
        frase = "My address is";
        variavel = objeto.cidade;
    
        event.target.style.color = "#aeba4e";
        criarVariavel(frase, variavel)
        endereco.addEventListener("mouseleave", function( event) {   
            event.target.style.color = "#858b8f";
          }, );
      }, false);

      situacao.addEventListener("mouseover", function( event) {   
        frase = "My password is";
        variavel = objeto.situacao;
    
        event.target.style.color = "#aeba4e";
        criarVariavel(frase, variavel)
        situacao.addEventListener("mouseleave", function( event) {  
            event.target.style.color = "#858b8f";
          }, );
      }, false);