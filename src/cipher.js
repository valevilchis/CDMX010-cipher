const cipher = {
  /*encode() {
    let textoEntrada = "Hola me llamo Valeria";
    Conteo de carcater por caracter
    /*for (var i=0; i<=textoEntrada.length; i++) {
      let nuevoTexto = textoEntrada.charCodeAt(i);
      console.log(nuevoTexto);*
    }
  }, 
  decode(desplazamiento, entradaTexto) {
  }
*/
      encode (textoEntrada,desplazamiento) {
        let textoSalida = "";

        for (let i=0; i < textoEntrada.length; i++) {
          let caracterSalida = textoEntrada.charCodeAt(i);
          let caracterDespla = ((caracterSalida - 65 + desplazamiento) % 26 + 65);
          textoSalida += String.fromCharCode(caracterDespla);
        }
        return textoSalida;
      },
      decode (textoEntrada, desplazamiento) {

      }
};

export default cipher;