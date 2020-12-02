import cipher from './cipher.js';

function encode() {
    let textoEntrada = "ABC";
    /*Conteo de carcater por caracter*/
    for (var i=0; i<=textoEntrada.length; i++) {
      let caracterSalida = textoEntrada.charCodeAt(i);
      console.log(caracterSalida);
    }
}

console.log(encode);
window.encode = encode;
