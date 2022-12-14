var cont = 0;

function adcionar(){
    // res = document.getElementById("num").value;
    cont = cont + 1;
    document.getElementById("num").innerHTML = "Integrantes totais no squad: " + cont;
};

function remover(){ 
    // res = document.getElementById("num").value;
    cont = cont - 1;
    document.getElementById("num").innerHTML = "Integrantes totais no squad: " + cont;
};