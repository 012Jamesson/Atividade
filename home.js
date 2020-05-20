var users = [
  { id: 0, foto: './img/profiles/1.jpg', nome: 'Lorraine', email: 'lorraine.beck22@example.com', telefone: '(960)-861-1890', cidade: 'Uberlândia - MG', situacao: 'Atendidos', dataNascimento: '12/02/1995' },
  { id: 1, foto: './img/profiles/2.jfif', nome: 'Lorem', email: 'loremipsum@mail.com', telefone: '(960)-861-1890', cidade: ' Uberlândia - MG', situacao: 'Atendidos', dataNascimento: '10/05/1995' },
  { id: 2, foto: './img/profiles/3.jpg', nome: 'Dolor', email: 'dolorsit123@mail.com', telefone: '(960)-861-1890', cidade: 'São Paulo - SP', situacao: 'Atendidos', dataNascimento: '12/07/1996' },
  { id: 3, foto: './img/profiles/4.jpg', nome: 'Consectut', email: 'consectutor123@mail.com', telefone: '(960)-861-1890', cidade: 'Uberlândia - MG', situacao: 'Atendidos', dataNascimento: '12/02/1995' },
  { id: 4, foto: './img/profiles/5.jpg', nome: 'Elit', email: 'elitamet@mail.com', telefone: '(960)-861-1890', cidade: 'São Paulo - SP', situacao: 'Atendidos', dataNascimento: '12/03/1992' },
  { id: 5, foto: './img/profiles/6.jpg', nome: 'Adipiscing', email: 'adipiscing@mail.com', telefone: '(960)-861-1890', cidade: 'São Paulo - SP', situacao: 'Lixeira', dataNascimento: '15/08/1995' },
  { id: 6, foto: './img/profiles/7.png', nome: 'Ipsum', email: 'Ipsumdolor12345@mail.com', telefone: '(960)-861-1890', cidade: 'Uberlândia - MG', situacao: 'Lixeira', dataNascimento: '05/02/1994' },
  { id: 7, foto: './img/profiles/8.jpg', nome: 'Beck Elit', email: 'beckelitsit@mail.com', telefone: '(960)-861-1890', cidade: 'Belo Horizonte - MG', situacao: 'Lixeira', dataNascimento: '18/02/1996' },
  { id: 8, foto: './img/profiles/9.jpg', nome: 'Lorem', email: 'loremipsun@mail.com', telefone: '(960)-861-1890', cidade: 'São Paulo - SP', situacao: 'Lixeira' }
];

var temporalUsers = [];
var iconLixeira = 'icon-visible';
var iconAtendidos = 'icon-visible';

function criarPopup(nome, status) {
  var popup = "<div class='popup' id='popup'>"
    + "<p><i id='popup-icon' class='fas fa-exclamation-circle'></i>usuario: " + nome + " mudou o status para " + status + "</p>"
    + "</div>"
  var showPopup = document.getElementById("show-popup");
  showPopup.innerHTML = popup;
}

function popupExistente(status) {
  var popupExistente = "<div class='popup2' id='popup2'>"
    + "<p><i id='popup-icon' class='fas fa-exclamation-circle'></i>Esse usuario já se encontra em " + status + "</p>"
    + "</div>"
  var showPopupExistente = document.getElementById("show-popup-existente");
  showPopupExistente.innerHTML = popupExistente;
}


function carregarUsers(temporalUsers) {
  if (temporalUsers === null) {
    temporalUsers = users
  }

  text = "<table  class='card-item-user'>";
  temporalUsers.forEach((user) => {
  if(temporalUsers === users){
    if (user.situacao === 'Lixeira') {
      iconLixeira = 'select-icon';
      iconAtendidos = 'noSelect-icon';
    } else {
      iconAtendidos = 'select-icon';
      iconLixeira = 'noSelect-icon';
    }
  }
    text += "<tr class='list-users'> ";
    text += "<td class='user-foto-tab'>" + "<img  class='user-foto'   src= ' " + user.foto + "' alt='Icone user'/>" + "</td>";
    text += "<td class='user-nome'; onClick='pegarUsuario(" + user.id + ")'><a class='link' href='./user/user.html?" + user.id + "'/>" + user.nome + "</td>";
    text += "<td class='user-email';>" + user.email + "</td>";
    text += "<td>" + user.telefone + "</td>";
    text += "<td>" + user.cidade + "</td>";
    text += "<td class='icons-acoes-user'>"
      + "<i class='fas fa-trash-alt' id='" + iconLixeira + "' onClick='moverLixeira(" + user.id + ")'></i>"
      + "<i class='fas fa-border-none' id='todos-icon' onClick=' filtroTodos()'></i>"
      + "<i class='fas fa-check' id='" + iconAtendidos + "' onClick='moverAtendidos(" + user.id + ")'></i>"
      + "</td>";
    text += "</tr>";
  })
  text += "</table>";
  var html = document.getElementById("html");
  html.innerHTML = text;
}

function filtro() {
  var input, filter, li, nome, email, i, txtValue;
  input = document.getElementById('filtro');
  filter = input.value.toUpperCase();
  li = document.getElementsByTagName('tr');

  for (i = 0; i < li.length; i++) {
    var nome = li[i].getElementsByClassName("user-nome")[0];
    var email = li[i].getElementsByClassName("user-email")[0];
    var txtValue = nome.textContent && nome.innerText && email.innerText && email.textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].className = "filtro-existente";
    } else {
      li[i].className = "filtro-inexistente";
    }
  }
}

function filtroLixeira() {
  document.getElementById('sidenav-todos').className = 'noSelect-tab';
  document.getElementById('sidenav-atendidos').className = 'noSelect-tab';
  document.getElementById('sidenav-lixeira').className = 'select-tab';
  iconLixeira = 'icon-invisible';
  iconAtendidos = 'icon-Visible';
  var filtrado = users.filter(function (obj) { return obj.situacao === "Lixeira"; });
  temporalUsers = filtrado;
  carregarUsers(temporalUsers)
}

function filtroAtendidos() {
  document.getElementById('sidenav-todos').className = 'noSelect-tab';
  document.getElementById('sidenav-atendidos').className = 'select-tab';
  document.getElementById('sidenav-lixeira').className = 'noSelect-tab';
  iconLixeira = 'icon-visible';
  iconAtendidos = 'icon-invisible'
  var filtrado = users.filter(function (obj) { return obj.situacao === "Atendidos"; });
  temporalUsers = filtrado;
  carregarUsers(temporalUsers)

}

function filtroTodos() {
  document.getElementById('sidenav-todos').className = 'select-tab';
  document.getElementById('sidenav-atendidos').className = 'noSelect-tab';
  document.getElementById('sidenav-lixeira').className = 'noSelect-tab';
  temporalUsers = null
  carregarUsers(users)
}

function moverLixeira(user) {
  if (users[user].situacao === "Lixeira") {
    popupExistente(users[user].situacao)
    document.getElementById('show-popup-existente').className = 'show-popup-existente';
    setTimeout(function () { document.getElementById('show-popup-existente').className = 'popup' }, 2000);
  } else {
    users[user].situacao = "Lixeira"
    criarPopup(users[user].nome, users[user].situacao)
    popup = document.getElementById('popup').className = 'show-popup';
    setTimeout(function () { document.getElementById('popup').className = 'popup' }, 2000);
    filtroTodos()
  }
}

function moverAtendidos(user) {
  if (users[user].situacao === "Atendidos") {
    popupExistente(users[user].situacao)
    document.getElementById('show-popup-existente').className = 'show-popup-existente';
    setTimeout(function () { document.getElementById('show-popup-existente').className = 'popup' }, 2000);
  } else {
    users[user].situacao = "Atendidos"
    users[user].nome;
    criarPopup(users[user].nome, users[user].situacao)
    document.getElementById('popup').className = 'show-popup';
    setTimeout(function () { document.getElementById('popup').className = 'popup' }, 2000);
    temporalUsers = null
    filtroTodos()
  }
}

function pegarUsuario(id) {
  let user = users.find(item => item.id === id);
  var userString = JSON.stringify(user)
  sessionStorage.setItem(user.id, userString);
}

function abrirMenu() {
  var menu = document.getElementById('menu');
  var card = document.getElementById('card-users');
  var optionTodos = document.getElementById('menu-option-todos')
  var optionAtendidos = document.getElementById('menu-option-atendidos')
  var optionLixeira = document.getElementById('menu-option-lixeira')
  if (menu.className === 'sidenav' && card.className === 'card-users') {
    menu.className = 'sidenav-fechado';
    card.className = 'card-users';
    optionTodos.className = 'menu-option-fechado';
    optionAtendidos.className = 'menu-option-fechado';
    optionLixeira.className = 'menu-option-fechado';
  } else {
    menu.className = 'sidenav';
    card.className = 'card-users';
    optionTodos.className = 'menu-option';
    optionAtendidos.className = 'menu-option';
    optionLixeira.className = 'menu-option';
  }
}