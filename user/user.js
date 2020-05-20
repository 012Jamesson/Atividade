var url = window.location.href;
var parametroDaUrl = url.split("?")[1];
var user = sessionStorage.getItem(parametroDaUrl)
var objeto = JSON.parse(user);
var frase = "Hi, my name is";
var variavel = objeto.nome;

var textImg = "<div>"
  + "<img class='user-foto' src='." + objeto.foto + "''/>"
  + " </div>"
var img = document.getElementById("user-foto");
img.innerHTML = textImg;

var textIcons = "<div>"
  + "<div class='icons-user'>"
  + "<i id='nome' onmouseover='nomeSelect()' class='far fa-user w3-xxlarge '></i>"
  + "<i id='mail' onmouseover='mailSelect()' class='far fa-envelope w3-xxlarge'></i>"
  + "<i id='aniversario' onmouseover='nascimentoSelect()' class='far fa-calendar-alt w3-xxlarge'></i>"
  + "<i id='endereco' onmouseover='enderecoSelect()' class='fas fa-map-marked-alt w3-xxlarge'></i>"
  + "<i id='phone' onmouseover='phoneSelect()' class='fas fa-phone w3-xxlarge'></i>"
  + "<i id='situacao' onmouseover='situacaoSelect()' class='fas fa-key w3-xxlarge'></i>"
  + "</div>"
  + "</div>"
var html = document.getElementById("html");
html.innerHTML = textIcons;

function criarVariavel(frase, variavel) {
  var textVariavel = "<div>"
    + "<p class='frase-user'>" + frase + "</p>"
    + "<p class='variavel-user'>" + variavel + "</p>"
    + "</div>"
  var info = document.getElementById("variavel-user");
  info.innerHTML = textVariavel;
}

var nome = document.getElementById("nome");
var mail = document.getElementById("mail");
var aniversario = document.getElementById("aniversario");
var phone = document.getElementById("phone");
var situacao = document.getElementById("situacao");

function nomeSelect() {
  frase = "Hi, my name is";
  variavel = objeto.nome;
  criarVariavel(frase, variavel)
}

function mailSelect() {
  frase = "My email address is";
  variavel = objeto.email;
  criarVariavel(frase, variavel)
}

function nascimentoSelect() {
  frase = "My birthday is";
  variavel = objeto.dataNascimento;
  criarVariavel(frase, variavel)
}

function phoneSelect() {
  frase = "My phone number is";
  variavel = objeto.telefone;
  criarVariavel(frase, variavel)
}

function enderecoSelect() {
  frase = "My address is";
  variavel = objeto.cidade;
  criarVariavel(frase, variavel)
}

function situacaoSelect() {
  frase = "My password is";
  variavel = objeto.situacao;
  criarVariavel(frase, variavel)
}