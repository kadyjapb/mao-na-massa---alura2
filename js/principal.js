
var titulo = document.querySelector(".titulo");
titulo.textContent = " Aparecida nutricionista ";

var paulo = document.querySelector('#linhaPaulo');
var pesoPaulo = paulo.querySelector(".info-peso").textContent;
var alturaPaulo = paulo.querySelector(".info-altura").textContent;
var imcPaulo = pesoPaulo / (alturaPaulo * alturaPaulo);
paulo.querySelector(".info-imc").textContent = imcPaulo;