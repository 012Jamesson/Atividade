    users =  [
        { id: 1, foto: './img/profiles/1.jpg',nome:'Lorraine', email:'lorraine.beck22@example.com', telefone:'(960)-861-1890', cidade:'Uberlândia - MG', situacao:'Atendidos', dataNascimento:'12/02/1995' },
        { id: 2, foto: './img/profiles/2.jfif', nome:'Lorem', email:'loremipsum@mail.com', telefone:'(960)-861-1890', cidade:' Uberlândia - MG' , situacao:'Atendidos' , dataNascimento:'10/05/1995'},
        { id: 3, foto: './img/profiles/3.jpg', nome:'Dolor', email:'dolorsit123@mail.com', telefone: '(960)-861-1890', cidade:'São Paulo - SP', situacao:'Atendidos', dataNascimento:'12/07/1996'},
        { id: 4, foto: './img/profiles/4.jpg', nome:'Consectut', email:'consectutor123@mail.com', telefone: '(960)-861-1890', cidade:'Uberlândia - MG', situacao:'Atendidos', dataNascimento:'12/02/1995'},
        { id: 5, foto: './img/profiles/5.jpg', nome:'Elit', email:'elitamet@mail.com', telefone: '(960)-861-1890', cidade:'São Paulo - SP', situacao:'Atendidos', dataNascimento:'12/03/1992'},
        { id: 6, foto: './img/profiles/6.jpg', nome:'Adipiscing', email:'adipiscing@mail.com', telefone: '(960)-861-1890', cidade:'São Paulo - SP', situacao:'Lixeira', dataNascimento:'15/08/1995'},
        { id: 7, foto: './img/profiles/7.png', nome:'Ipsum', email:'Ipsumdolor12345@mail.com', telefone: '(960)-861-1890', cidade:'Uberlândia - MG', situacao:'Lixeira', dataNascimento:'05/02/1994'},
        { id: 8, foto: './img/profiles/8.jpg', nome:'Beck Elit', email:'beckelitsit@mail.com', telefone: '(960)-861-1890', cidade:'Belo Horizonte - MG', situacao:'Lixeira', dataNascimento:'18/02/1996'},
        { id: 9, foto: './img/profiles/9.jpg', nome:'Lorem', email:'loremipsun@mail.com', telefone: '(960)-861-1890', cidade:'São Paulo - SP', situacao:'Lixeira'}
      ];

    temporalUsers =[]
  
function carregarUsers(temporalUsers){
      
   if(temporalUsers == null){
        temporalUsers = users
    }

    text = "<table  class='item'>";
    temporalUsers.forEach((user) => {
    text += "<tr class='list'> ";
    text += "<td>" + "<img  class='foto'   src= ' " + user.foto +"'" +"</td>";  
    text += "<td class='nome';  style='color:  #858b8f; font-weight: bold; margin-left: -8%; ' onClick='pegarUsuario("+user.id+")'><a class='a' href='./user/user.html?"+user.id+"'/>"  + user.nome + "</td>";
    text += "<td class='email'; style='color:  #ababab; '>" + user.email + "</td>";
    text += "<td style='color:  #ababab; '>" + user.telefone + "</td>";
    text += "<td style='color:  #ababab; '>" + user.cidade + "</td>";
    text += "<td size='2' style='color:  #ababab;'>"
    +"<i class='fas fa-trash-alt' onClick='moverLixeira("+user.id+")'></i> &nbsp;"
    +"<i class='fas fa-border-none'></i> &nbsp;"
    +"<i class='fas fa-check' onClick='moverAtendidos("+user.id+")'></i>"
    +"</td>";
    text += "</tr>";
  })
  text += "</table>";
  html = document.getElementById("html");
        html.innerHTML = text;
}
      function filtro() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('filtro');
        filter = input.value.toUpperCase();
        ul = document.getElementsByClassName("list");
        li = document.getElementsByTagName('tr');
      
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByClassName("nome")[0];
          b = li[i].getElementsByClassName("email")[0];
          txtValue = a.textContent && a.innerText && b.innerText && b.textContent;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }

      function filtroLixeira(){ 
        menuTodos =  document.getElementById('todos')
        menuTodos.style.color = "#858b8f"
        menuAtendidos =  document.getElementById('atendidos')
        menuAtendidos.style.color = "#858b8f"
        menuLixeira =  document.getElementById('lixeira')
        menuLixeira.style.color = "#aeba4e"
        var filtrado = users.filter(function(obj) { return obj.situacao == "Lixeira"; });
        temporalUsers = filtrado;
         carregarUsers(temporalUsers)
      }

      function filtroAtendidos(){
        menuTodos =  document.getElementById('todos')
        menuTodos.style.color = "#858b8f"
        menuAtendidos =  document.getElementById('atendidos')
        menuAtendidos.style.color = "#aeba4e"
        menuLixeira =  document.getElementById('lixeira')
        menuLixeira.style.color = "#858b8f"
        var filtrado = users.filter(function(obj) { return obj.situacao == "Atendidos"; });
        temporalUsers = filtrado;
        carregarUsers(temporalUsers)

      }
      function filtroTodos(){
        menuTodos =  document.getElementById('todos')
        menuTodos.style.color = "#aeba4e"
        menuAtendidos =  document.getElementById('atendidos')
        menuAtendidos.style.color = "#858b8f"
        menuLixeira =  document.getElementById('lixeira')
        menuLixeira.style.color = "#858b8f"
        temporalUsers = null
        carregarUsers(users)
      }
      function moverLixeira(user){
        if(users[user-1].situacao == "Lixeira"){
          alert("esse usuario já se encontra em Lixeira")
        }else{
        users[user-1].situacao = "Lixeira"
        alert("usuario: " +users[user-1].nome+ " mudou o status para Lixeira")
        filtroTodos()
        }
      }
      function moverAtendidos(user){
        if(users[user-1].situacao == "Atendidos"){
          alert("esse usuario já se encontra em Atendidos")
        }else{
        users[user-1].situacao = "Atendidos"
        alert("usuario: " +users[user-1].nome+ " mudou o status para Atendidos")
        temporalUsers = null
        filtroTodos()
        }
      }
      function pegarUsuario(id){
        console.log(id)
        let user = users.find(item => item.id == id );
        userString = JSON.stringify(user)
        console.log(userString)
        sessionStorage.setItem(user.id, userString);
      }