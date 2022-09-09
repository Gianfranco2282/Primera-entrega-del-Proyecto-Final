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

//OBJETO COTIZACION
function Cotizacion(cantLogo,cantPapeleria,cantEmpaque,cantBranding){
    this.cantLogo = cantLogo;
    this.cantPapeleria = cantPapeleria;
    this.cantEmpaque = cantEmpaque;
    this.cantBranding = cantBranding;
}

//COMPONENTES DEL OBJETO COTIZACION
this.composicion = function(){
    console.log("\n\nMi cotización finalmente se compuso de: "+
    "\n"+ cantLogo + " logotipos"+
    "\n"+ cantPapeleria + " Combos de papelería"+
    "\n"+ cantEmpaque + " Combos de empaque"+
    "\n"+ cantBranding + " Combos de branding");
}

this.cotizar = function() {

    total = resultadoLogos + resultadoPapeleria + resultadoEmpaque + resultadoBranding;
    totalIva = total + (total*iva);


    console.log("\n\nCOTIZACIÓN FINAL\n\nLOGOS | Cantidad: " + cantLogo + " / Subtotal: " + resultadoLogos + " CLP"+
    "\nCOMBOS DE PAPELERÍA | Cantidad: " + cantPapeleria  + " / Subtotal: " + resultadoPapeleria + " CLP"+
    "\nCOMBOS DE EMPAQUE | Cantidad: " + cantEmpaque + " / Subtotal: " + resultadoEmpaque + " CLP"+
    "\nCOMBOS DE BRANDING | Cantidad: " + cantBranding + " / Subtotal: " + resultadoBranding+ " CLP"+
    "\n\nTOTAL: " + total + " CLP"+
    "\nTOTAL + IVA (19%): " + totalIva + " CLP"+
    "\n\nARREGLO RESUMEN DE CANTIDADES: " + arregloResumenCantidades());
                            
    alert("COTIZACIÓN FINAL\n\nLOGOS | Cantidad: " + cantLogo + " / Subtotal: " + resultadoLogos + " CLP"+
    "\nCOMBOS DE PAPELERÍA | Cantidad: " + cantPapeleria + " / Subtotal: " + resultadoPapeleria + " CLP"+
     "\nCOMBOS DE EMPAQUE | Cantidad: " + cantEmpaque + " / Subtotal: " + resultadoEmpaque + " CLP"+
     "\nCOMBOS DE BRANDING | Cantidad: " + cantBranding + " / Subtotal: " + resultadoBranding+ " CLP"+
     "\n\nTOTAL: " + total + " CLP"+
     "\nTOTAL + IVA (19%): " + totalIva + " CLP"+
     "\n\nARREGLO RESUMEN DE CANTIDADES: " + arregloResumenCantidades());

}

//FUNCION QUE INSTANCIA AL OBJETO Y CALCULA EN ÉL LA COTIZACION FINAL
//Es llamado en el botón Cotizar del HTML
function totalCotizacion(){
    //INSTANCIA DEL OBJETO COTIZACION
    //Se utiliza para invocar el método cotizar() del Objeto en el botón Cotizar del index.html
    var miCotizacion = new Cotizacion(logo,papeleria,empaque,branding);
    miCotizacion.cotizar();
    miCotizacion.composicion();
}

//ARREGLO RESUMEN DE CANTIDADES SOLICITADAS
function arregloResumenCantidades(){
    var partesCotizacion = [];
    partesCotizacion.push("Logotipos: " + logo);
    partesCotizacion.push("Combo Papeleria: " + papeleria);
    partesCotizacion.push("Combo Empaque: " + empaque);
    partesCotizacion.push("Combo Branding: " + branding);
    partesCotizacion = partesCotizacion.join(" / ");
    return partesCotizacion;
}


//VALIDAR NUMERO
function noEsNumero(numero,tipo){
    //si no es numero ó si es menor que cero, indica al cliente solicitar de nuevo
    if(isNaN(numero) || numero < 0){
        alert("Debes ingresar una Cantidad de " + tipo + " válido\nHaz una nueva solicitud");
    }
}

//FUNCION PARA CALCULAR EL COSTO DE LAS SOLICITUDES
//Es invocada por las 4 funciones de solicitudes de logotipo, papeleria, empaque y branding
//Se aplican descuentos para solitudes mayores a 1
function calculos(cantidad,tipo,precio,resultado){
    if(cantidad == 1 || cantidad == 0){
        resultado = cantidad*precio;
        console.log("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " CLP");
        alert("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " CLP");
    }
    if(cantidad > 1){
        resultado = cantidad*(precio*descuento);
        console.log("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " CLP");
        alert("Cantidad de " + tipo + ": " + cantidad +  " | Precio: " + resultado + " CLP");
    }
    return resultado;
}