var txt_encriptar = document.getElementById('encriptar'); // text area encriptar/desencriptar
var txt_resultado = document.getElementById('resultado'); // text area resultado

var cnt_resultado = document.querySelector('.ctn-resultado'); // contenedor mostrar resultado
var cnt_inicio = document.querySelector('.ctn-inicio'); // contenedor mostrar inicio


const soloLetras ='^[a-z !ñ !\n]+$';

function encriptar() {
    if (validar(txt_encriptar.value) != false) {
        let txt_encriptado = txt_encriptar.value;

        txt_encriptado = txt_encriptado.replaceAll('e','enter');
        txt_encriptado = txt_encriptado.replaceAll('i','imes');
        txt_encriptado = txt_encriptado.replaceAll('a','ai');
        txt_encriptado = txt_encriptado.replaceAll('o','ober');
        txt_encriptado = txt_encriptado.replaceAll('u','ufat');

        console.log(txt_encriptado);
        cnt_inicio.classList.add('ocultar');
        cnt_resultado.classList.remove('ocultar');
        txt_resultado.value= txt_encriptado;
    }
}

function desencriptar() {
    if (validar(txt_encriptar.value) != false) {
        let txt_desencriptado = txt_encriptar.value;

        txt_desencriptado = txt_desencriptado.replaceAll('enter','e');
        txt_desencriptado = txt_desencriptado.replaceAll('imes','i');
        txt_desencriptado = txt_desencriptado.replaceAll('ai','a');
        txt_desencriptado = txt_desencriptado.replaceAll('ober','o');
        txt_desencriptado = txt_desencriptado.replaceAll('ufat','u');

        console.log(txt_desencriptado);
        cnt_inicio.classList.add('ocultar');
        cnt_resultado.classList.remove('ocultar');
        txt_resultado.value= txt_desencriptado;
    }
}

function validar(txt_validar) {
    if(txt_validar.lenght == 0 || txt_validar == ""){
        alert("Ingrese un texto por favor");
        return false;
    } else if(txt_validar.match(soloLetras) == null){
        alert("Solo son validas letras minusculas y sin acentos.");
        return false;
    }
    return true;
}

function copiar(){
    if (txt_resultado.value == "" || txt_resultado.lenght == 0) {
        alert("No existe un texto para copiar");
    } else {
        navigator.clipboard.writeText(txt_resultado.value);
        txt_resultado.value = "";
        // txt_encriptar.value = "";
        alert("Texto copiado con exito");
    }
}

function borrar() {
    txt_encriptar.value = "";
    txt_resultado.value = "";

    cnt_inicio.classList.remove('ocultar');
    cnt_resultado.classList.add('ocultar');
}