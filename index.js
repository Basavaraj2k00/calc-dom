function calc() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);


    // var num1 = Number(document.querySelector("#num1").value);
    // var num2 = Number(document.querySelector("#num2").value);
    var add = num1 + num2;
    document.getElementById("sum").value = add;
}