/*
  Curso: Javascript
  Estudiante: Gianfranco Marchesi
  1era Entrega del Proyecto Final | 08/09/2022
  Se trata de un cotizador de productos tecnologicos.
  El ejercicio tiene lo solicitado para la 1era entrega:
  -HTML y CSS
  -Prompt, console, alert
  -Funciones
  -Objetos
*/

//VARIABLES GLOBALES
var logo = 0;
var papeleria = 0;
var empaque = 0;
var branding = 0;
var tipo = "";
var resultadoLogos = 0;
var resultadoPapeleria = 0;
var resultadoEmpaque = 0;
var resultadoBranding = 0;
var total = 0;


//CONSTANTES
//Precios 1 logo
const precioLogo = 30000;
//Precio de 1 combo papeleria: 100 hojas, 100 sobres, 100 tarjetas, 100 carpetas
const precioPapeleria = 120000;
//Precio de 1 combo empaque: 100 cajas impresas con el logo
const precioEmpaque = 200000;
//Precio de 1 combo branding: 10 gorras, 10 boligrafos, 10 libretas
const precioBranding = 60000;
//Descuento del 10%
const descuento = 0.90;
//Impuesto 19%
const iva = 0.19;

//FUNCION PARA SOLICITAR LOGOTIPO
//Se invoca en el botón Solicitar de Logotipo
function solicitarLogo(){
    tipo = "LOGOTIPO";
    logo = parseInt(prompt("DISEÑO DE LOGOTIPO\n\nPrecio unitario: " + precioLogo + " CLP\nDescuento del 10% para cantidades superiores a 1 logo\n\nIngrese la cantidad:"));
    noEsNumero(logo,tipo);
    resultadoLogos = calculos(logo,tipo,precioLogo,resultadoLogos);
    return resultadoLogos;
}

//FUNCION PARA SOLICITAR PAPELERIA
//Se invoca en el botón Solicitar de Papelería
function solicitarPapeleria(){
    tipo = "Combos de PAPELERÍA";
    papeleria = parseInt(prompt("COMBO DE PAPELERÍA: 100 hojas, 100 sobres, 100 tarjetas, 100 carpetas con logo impreso\n\nPrecio por combo: " + precioPapeleria + " CLP\nDescuento del 10% para cantidades superiores a 1 combo\n\nIngrese la cantidad:"));
    noEsNumero(papeleria,tipo);
    resultadoPapeleria = calculos(papeleria,tipo,precioPapeleria,resultadoPapeleria);
    return resultadoPapeleria;
}

//FUNCION PARA SOLICITAR EMPAQUE
function solicitarEmpaque(){
    tipo = "Combos de EMPAQUE";
    empaque = parseInt(prompt("COMBO DE EMPAQUE: 100 cajas con logo impreso\n\nPrecio por combo: " + precioEmpaque + " CLP\nDescuento del 10% para cantidades superiores a 1 combo\n\nIngrese la cantidad:"));
    noEsNumero(empaque,tipo);
    resultadoEmpaque = calculos(empaque,tipo,precioEmpaque,resultadoEmpaque);
    return resultadoEmpaque;
}

//FUNCION PARA SOLICITAR BRANDING
//Se invoca en el botón Solicitar de Branding
function solicitarBranding(){
    tipo = "Combos de Branding";
    branding = parseInt(prompt("COMBO DE BRANDING: 10 gorras, 10 boligrafos, 10 libretas con logo impreso\n\nPrecio por combo: " + precioBranding + " CLP\nDescuento del 10% para cantidades superiores a 1 combo\n\nIngrese la cantidad:"));
    noEsNumero(branding,tipo);
    resultadoBranding= calculos(branding,tipo,precioBranding,resultadoBranding);
    return resultadoBranding;
}

