function saludar() {
    var nombre = document.getElementById("nombreInput").value;
    var saludo = "¡Hola, " + nombre + "! Bienvenido.";
    document.getElementById("saludo").innerText = saludo;
    alert(saludo);
}

function Operacion() {
    var Numero1 = parseFloat(document.getElementById("primerNumero").value);
    var Numero2 = parseFloat(document.getElementById("segundoNumero").value);
    var suma = Numero1 + Numero2;
    var resta = Numero1 - Numero2;
    var multiplicacion = Numero1 * Numero2;
    var division = Numero1 / Numero2;

    var resultado = "Suma:" + suma + "\n" +
                    "resta:"+ resta + "\n" +
                    "multiplicacion:" + multiplicacion + "\n"
                    "Division:" + division;
    alert(resultado)                


}

function Inverso () {
    var cadena = document.getElementById("cadenaInput").value;
    var cadenaInversa= "";

    for (var n = cadena.length - 1; n >= 0; n--){
        cadenaInversa += cadena[n];

    }

    alert("Cadena en orden inverso: " + cadenaInversa);

}

function circulo () {
    var radio = parseFloat(document.getElementById("radioInput").value)
    var area = Math.PI * Math.pow(radio,2);

    var perimetro = 2 * Math.PI * radio;
    var resulstadoCs = "Area del circulo:" + area.toFixed(2) + "</br>" +
                       "Perimetro del Circulo:" + perimetro.toFixed(2);

    alert(resulstadoCs);

}

function promedioN() {
    var numeroString = document.getElementById("numerosInputs").value;
    var numeross = numeroString.split(",").map(Number);

    var sumass = 0;
    for (var h = 0; h < numeross.length; h++){
        sumass += numeross[h];
    }  
    var promedioN = sumass / numeross.length;   
    var resultadoPr = "El promedio de los números es: " + promedioN.toFixed(2);
    alert(resultadoPr);
}

function numeroMul() {
    var numer1 = parseInt(document.getElementById("numerInput").value);
    var numer2 = parseInt(document.getElementById("numer2Input").value);

    if (numer2 === 0){
        alert("El segundo numero no puede ser cero");
        return;
    }
    if(numer1 % numer2 === 0){
        alert(numer1 + "es multiplo de " + numer2);

    }else{
        alert(numer1 + "no es multiplo de " + numer2);

    }

}
function primo() {
    var numerop = parseInt(document.getElementById("numermInput").value);

    if (numerop <= 1) {
        alert("Por favor, ingresa un número mayor que 1");
        return;
    }

    var esPrimo = true;

    for (var p = 2; p <= Math.sqrt(numerop); p++) {
        if (numerop % p === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        alert(numerop + " es un número primo.");
    } else {
        alert(numerop + " no es un número primo.");
    }
}

function numerosPares(){
    var numeroPs = "";

    for (var s = 1; s <= 100; s++){

        if(s % 2 === 0){

            numeroPs += s + "\n";
        } 
    } 

    alert("Numero Pares del 1 al 100:\n" + numeroPs);

}

function ordenaNumeros() {
    var numerosInput = document.getElementById("numerosInters").value;
    var numerosArray = numerosInput.split(",").map(Number);

    if (numerosArray.some(isNaN)) {
        alert("Por favor, ingresa solo números separados por comas.");
        return; // Detener la ejecución de la función si hay valores no numéricos
    }

    for (var k = 0; k < numerosArray.length; k++) {
        for (var d = 0; d < numerosArray.length - 1 - k; d++) {
            if (numerosArray[d] > numerosArray[d + 1]) {
                var temp = numerosArray[d];
                numerosArray[d] = numerosArray[d + 1];
                numerosArray[d + 1] = temp;
            }
        }
    }

    alert("Números Ordenados: " + numerosArray.join(","));
}