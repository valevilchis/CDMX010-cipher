
import cipher from './cipher.js';
/*function encode(password, desplazamiento) {
    let textoEntrada = password;
    let desplazamiento = desplazamiento;
    /*Conteo de carcater por caracter
    for (var i=0; i<=textoEntrada.length; i++) {
      let caracterSalida = textoEntrada.charCodeAt(i);
      console.log(caracterSalida);

      let caracterDespl = ((caracterSalida - 65 + desplazamiento) % 26 + 65);
      let cifrado = String.fromCharCode(caracterDespl);
      console.log(cifrado);
    }
}
function recibir() {
    var valor = document.getElementById("texto").value;
    document.getElementById("usr").innerHTML=valor;
    var valor = document.getElementById("password").value;
    document.getElementById("decode").innerHTML=valor; 
} */

let userEntrada = "";
let passEntrada = "";
let offset = 0;
let passSalida = "";

function encode() {
    userEntrada = document.getElementById("user").value;
    passEntrada = (document.getElementById("password").value).toUpperCase();
    offset = Number.parseInt(document.getElementById("desplazamiento").value);

    if (userEntrada == "") {
        alert("Usuario requerido.");
    } else if (passEntrada == "") {
        alert("Contraseña requerida.");
    } else if (offset <= 0 || offset == undefined) {
        alert("Seleccione un rango de desplazamiento.")
    } else {
        document.getElementById("usr").innerHTML = userEntrada;
        /*document.getElementById("decode").innerHTML = passEntrada;*/
        passSalida = cipher.encode(passEntrada,offset);
        document.getElementById("encode").innerHTML = passSalida;
    }
}

function decode (){


}

window.encode = encode;
window.decode = decode;