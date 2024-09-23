
var titulo = document.querySelector(".titulo");
titulo.textContent = " Aparecida nutricionista ";

// var paulo = document.querySelector('#linhaPaulo');
// var pesoPaulo = paulo.querySelector(".info-peso").textContent;
// var alturaPaulo = paulo.querySelector(".info-altura").textContent;
// var imcPaulo = pesoPaulo / (alturaPaulo * alturaPaulo);
// paulo.querySelector(".info-imc").textContent = imcPaulo;

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
}