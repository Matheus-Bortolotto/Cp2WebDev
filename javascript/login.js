function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login === "1234" && senha === "1234"){
        window.location.assign("home.html")
        alert('sucesso');


    }
    else{
        alert('invalido')
    }
}


