
import cipher from './cipher.js';

function encode() {
    let textoEntrada = "ABC";
    let desplazamiento = 8;
    /*Conteo de carcater por caracter*/
    for (var i=0; i<=textoEntrada.length; i++) {
      let caracterSalida = textoEntrada.charCodeAt(i);
      console.log(caracterSalida);

      let caracterDespl = ((caracterSalida - 65 + desplazamiento) % 26 + 65);
      let cifrado = String.fromCharCode(caracterDespl);
      console.log(cifrado);
     
    }
}

function recibir()
    {
        var valor = document.getElementById("texto").value;
        document.getElementById("usr").innerHTML=valor;
        var valor = document.getElementById("password").value;
        document.getElementById("decode").innerHTML=valor; 
        
    }       
console.log(encode);
window.encode = encode;
window.recibir = recibir;