const cipher = {
      encode (textoEntrada,desplazamiento) {
        let textoSalida = "";
        for (let i=0; i < textoEntrada.length; i++) {
          let caracterSalida = textoEntrada.charCodeAt(i);
          let caracterDespla = ((caracterSalida - 65 + desplazamiento) % 26 + 65);
          textoSalida = textoSalida + String.fromCharCode(caracterDespla);
        }
        return textoSalida;
      },
       decode (textoEntrada, desplazamiento) {
         let textoSalida = "";
         for (let i=0; i < textoEntrada.length; i++) {
           let caracterSalida = textoEntrada.charCodeAt(i);
           let caracterDespla = ((caracterSalida + 65 - desplazamiento)% 26 + 65);
           textoSalida += String.fromCharCode(caracterDespla);
         }
         return textoSalida;
      }
};

export default cipher;