
import cipher from './cipher.js';

let userEntrada = "";
let passEntrada = "";
let offset = 0;

document.getElementById('encodeM').addEventListener("click", encode, false);

function encode(){
    userEntrada = document.getElementById("user").value;
    passEntrada = (document.getElementById("password").value).toUpperCase();
    offset = Number.parseInt(document.getElementById("desplazamiento").value);
    let passSalida = "";
    let descifrar = document.getElementById("decode");
    
    if (userEntrada == "") {
        alert("Usuario requerido.");
    } else if (passEntrada == "") {
        alert("Contraseña requerida.");
    } else if (offset <= 0 || offset == undefined) {
        alert("Seleccione un rango de desplazamiento.")
    } else {
        document.getElementById("usr").innerHTML = userEntrada;
        passSalida = cipher.encode(passEntrada,offset);
        document.getElementById("encode").innerHTML = passSalida;
        descifrar.style.display='block';
    }
};

document.getElementById('decodeM').addEventListener("click", decode, false);

function decode (){
    userEntrada = document.getElementById("user").value;
    passEntrada = (document.getElementById("codigo").value).toUpperCase();
    let ofssetUser = Number.parseInt(document.getElementById("desplazamiento").value);
    let passDescifrada = "";

    if (passEntrada == "") {
        alert("Codigo requerido");
    } else {
        document.getElementById("usr-d").innerHTML = userEntrada;
        document.getElementById("encode-d").innerHTML = passEntrada;
        document.getElementById("off-d").innerHTML = ofssetUser;
        passDescifrada = cipher.decode(passEntrada,ofssetUser);
        document.getElementById("decode-d").innerHTML = passDescifrada;
    }
}

window.encode = encode;
window.decode = decode;