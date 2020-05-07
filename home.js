  var users = [
        { id: 0, foto: './img/profiles/1.jpg',nome:'Lorraine', email:'lorraine.beck22@example.com', telefone:'(960)-861-1890', cidade:'Uberlândia - MG', situacao:'Atendidos', dataNascimento:'12/02/1995' },
        { id: 1, foto: './img/profiles/2.jfif', nome:'Lorem', email:'loremipsum@mail.com', telefone:'(960)-861-1890', cidade:' Uberlândia - MG' , situacao:'Atendidos' , dataNascimento:'10/05/1995'},
        { id: 2, foto: './img/profiles/3.jpg', nome:'Dolor', email:'dolorsit123@mail.com', telefone: '(960)-861-1890', cidade:'São Paulo - SP', situacao:'Atendidos', dataNascimento:'12/07/1996'},
        { id: 3, foto: './img/profiles/4.jpg', nome:'Consectut', email:'consectutor123@mail.com', telefone: '(960)-861-1890', cidade:'Uberlândia - MG', situacao:'Atendidos', dataNascimento:'12/02/1995'},
        { id: 4, foto: './img/profiles/5.jpg', nome:'Elit', email:'elitamet@mail.com', telefone: '(960)-861-1890', cidade:'São Paulo - SP', situacao:'Atendidos', dataNascimento:'12/03/1992'},
        { id: 5, foto: './img/profiles/6.jpg', nome:'Adipiscing', email:'adipiscing@mail.com', telefone: '(960)-861-1890', cidade:'São Paulo - SP', situacao:'Lixeira', dataNascimento:'15/08/1995'},
        { id: 6, foto: './img/profiles/7.png', nome:'Ipsum', email:'Ipsumdolor12345@mail.com', telefone: '(960)-861-1890', cidade:'Uberlândia - MG', situacao:'Lixeira', dataNascimento:'05/02/1994'},
        { id: 7, foto: './img/profiles/8.jpg', nome:'Beck Elit', email:'beckelitsit@mail.com', telefone: '(960)-861-1890', cidade:'Belo Horizonte - MG', situacao:'Lixeira', dataNascimento:'18/02/1996'},
        { id: 8, foto: './img/profiles/9.jpg', nome:'Lorem', email:'loremipsun@mail.com', telefone: '(960)-861-1890', cidade:'São Paulo - SP', situacao:'Lixeira'}
      ];

    temporalUsers =[]

function criarPopup(nome, status){
  var popup = "<div class='popup' id='popup'>"
              +"<i class='fas fa-exclamation-circle'></i>"
              +"<p>usuario: "+nome+" mudou o status para "+status+"</p>"
          +"</div>"
      showPopup = document.getElementById("showPopup");
      showPopup.innerHTML = popup;
 }
    
  
function carregarUsers(temporalUsers){     
   if(temporalUsers === null){
        temporalUsers = users
    }
    
    text = "<table  class='item'>";
    temporalUsers.forEach((user) => {
    text += "<tr class='list'> ";
    text += "<td class='tdimg'>" + "<img  class='foto'   src= ' " + user.foto +"' alt='Icone user'/>" +"</td>";  
    text += "<td class='nome'; onClick='pegarUsuario("+user.id+")'><a class='a' href='./user/user.html?"+user.id+"'/>"  + user.nome + "</td>";
    text += "<td class='email';>" + user.email + "</td>";
    text += "<td>" + user.telefone + "</td>";
    text += "<td>" + user.cidade + "</td>";
    text += "<td>"
    +"<i class='fas fa-trash-alt' onClick='moverLixeira("+user.id+")'></i>"
    +"<i class='fas fa-border-none'></i>"
    +"<i class='fas fa-check' onClick='moverAtendidos("+user.id+")'></i>"
    +"</td>";
    text += "</tr>";
  })
  text += "</table>";
  html = document.getElementById("html");
        html.innerHTML = text;
}

function filtro() {
  var input, filter, li, nome, email, i, txtValue;
  input = document.getElementById('filtro');
  filter = input.value.toUpperCase();
  li = document.getElementsByTagName('tr');

  for (i = 0; i < li.length; i++) {
    nome = li[i].getElementsByClassName("nome")[0];
    email = li[i].getElementsByClassName("email")[0];
    txtValue = nome.textContent && nome.innerText && email.innerText && email.textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function filtroLixeira(){ 
  menuTodos =  document.getElementById('todos').className  = 'noSelect';
  menuAtendidos =  document.getElementById('atendidos').className = 'noSelect'
  menuLixeira =  document.getElementById('lixeira').className = 'select'
  var filtrado = users.filter(function(obj) { return obj.situacao === "Lixeira"; });
  temporalUsers = filtrado;
  carregarUsers(temporalUsers)
}

function filtroAtendidos(){
  menuTodos =  document.getElementById('todos').className  = 'noSelect';
  menuAtendidos =  document.getElementById('atendidos').className = 'select'
  menuLixeira =  document.getElementById('lixeira').className = 'noSelect'
  var filtrado = users.filter(function(obj) { return obj.situacao === "Atendidos"; });
  temporalUsers = filtrado;
  carregarUsers(temporalUsers)

}

function filtroTodos(){
  menuTodos =  document.getElementById('todos').className  = 'select';
  menuAtendidos =  document.getElementById('atendidos').className = 'noSelect';
  menuLixeira =  document.getElementById('lixeira').className = 'noSelect';
  temporalUsers = null
  carregarUsers(users)
}

function moverLixeira(user){
  if(users[user].situacao === "Lixeira"){
    alert("esse usuario já se encontra em Lixeira")
  }else{
    users[user].situacao = "Lixeira"
    criarPopup(users[user].nome,users[user].situacao)
    popup =  document.getElementById('popup').className = 'showpopup';
    setTimeout(function(){ popup =document.getElementById('popup').className ='popup' }, 2000);
    filtroTodos()
  }
}

function moverAtendidos(user){
  if(users[user].situacao === "Atendidos"){
    alert("esse usuario já se encontra em Atendidos")
  }else{
    users[user].situacao = "Atendidos"
    users[user].nome;
    criarPopup(users[user].nome,users[user].situacao)
    popup =  document.getElementById('popup').className = 'showpopup';
    setTimeout(function(){ popup =document.getElementById('popup').className ='popup' }, 2000);
    temporalUsers = null
    filtroTodos()
  }
}

function pegarUsuario(id){
  let user = users.find(item => item.id == id );
  userString = JSON.stringify(user)
  sessionStorage.setItem(user.id, userString);
}