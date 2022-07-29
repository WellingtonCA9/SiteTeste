function logar(){
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin" && senha == "123"){
        alert("Usuário logado")
        location.href = "index.html";
    }
    else{
        alert("Usuário ou senha incorreto.");
    }
}

function AddCart(a) {
    console.log(a);
    carrinho.push(a);
}