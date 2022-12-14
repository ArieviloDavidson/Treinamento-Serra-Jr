function somar(){
    // alert('FUNCIONOU!');
    res = 0;
    var num1 = document.getElementById("soma1").value;
    var num2 = document.getElementById("soma2").value;
    res = parseFloat(num1) + parseFloat(num2);
    document.getElementById("ress").innerHTML = res;
};

function sub(){
    // alert('FUNCIONOU!');
    res = 0;
    var num1 = document.getElementById("sub1").value;
    var num2 = document.getElementById("sub2").value;
    res = parseFloat(num1) - parseFloat(num2);
    document.getElementById("ressu").innerHTML = res;
};

function multi(){
    // alert('FUNCIONOU!');
    res = 0;
    var num1 = document.getElementById("mult1").value;
    var num2 = document.getElementById("mult2").value;
    res = parseFloat(num1) * parseFloat(num2);
    document.getElementById("resm").innerHTML = res;
};

function div(){
    // alert('FUNCIONOU!');
    res = 0;
    var num1 = document.getElementById("div1").value;
    var num2 = document.getElementById("div2").value;
    res = parseFloat(num1) / parseFloat(num2);
    document.getElementById("resd").innerHTML = res;
};