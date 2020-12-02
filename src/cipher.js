const cipher = {
  encode() {
    let textoEntrada = "Hola me llamo Valeria";
    /*Conteo de carcater por caracter*/
    for (var i=0; i<=textoEntrada.length; i++) {
      let nuevoTexto = textoEntrada.charCodeAt(i);
      console.log(nuevoTexto);
    }
  }, 

  decode(desplazamiento, entradaTexto) {

  }

};

export default cipher;