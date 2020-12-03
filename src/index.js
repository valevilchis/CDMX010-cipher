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

console.log(encode);
window.encode = encode;