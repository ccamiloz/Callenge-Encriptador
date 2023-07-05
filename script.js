var botonEncriptar = document.querySelector(".boton_encriptar")
var botonDesencriptar = document.querySelector(".boton_desencriptar")
var munieco = document.querySelector(".imagenprincipal")
var parrafo = document.querySelector(".parrafo")
var resultado = document.querySelector(".texto_resultado")
var botonCopiar = document.querySelector(".copiar")
var noMensaje = document.querySelector(".parrafo h3")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

//función para el botón encriptar
function encriptar() {
    var cajatexto = recuperarTexto()
    
    if (cajatexto.trim() === "") {
        noMensaje.style.display = "inline-block"
        munieco.classList.remove("ocultar");
        parrafo.classList.remove("ocultar");
        botonCopiar.style.display = "none";
        resultado.textContent = "";
        return;
    }
    
    ocultarAdelante();
    resultado.textContent = encriptarTexto(cajatexto)

}

//función para el botón desencriptar
function desencriptar() {
    var cajatexto = recuperarTexto()
    if (cajatexto.trim() === "") {
        noMensaje.style.display = "inline-block"
        munieco.classList.remove("ocultar");
        parrafo.classList.remove("ocultar");
        botonCopiar.style.display = "none";
        resultado.textContent = "";
        return;
    }
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(cajatexto)
}

//función para seleccionar el texto
function recuperarTexto() {
    var cajatexto = document.querySelector(".textbox")
    return cajatexto.value
}

//función para ocultar el texto e imagen
function ocultarAdelante() {
    munieco.classList.add("ocultar");
    parrafo.classList.add("ocultar");
    botonCopiar.style.display = "inline-block";
}

//funciones para encriptar y desencriptar el texto
function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++) {
        if(texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i = i+1;
        }
        else if(texto[i] == "e") {
            textoFinal = textoFinal + "e";
            i = i+4;
        }
        else if(texto[i] == "i") {
            textoFinal = textoFinal + "i";
            i = i+3;
        }
        else if(texto[i] == "o") {
            textoFinal = textoFinal + "o";
            i = i+3;
        }
        else if(texto[i] == "u") {
            textoFinal = textoFinal + "u";
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

//función del botón reiniciar
function reiniciarPagina() {
    location.reload();
}

//Boton copiar
const boton_copiar = document.querySelector(".boton_copiar");
boton_copiar.addEventListener("click", copiar = () => {
var contenido =document.querySelector(".texto_resultado").textContent;
navigator.clipboard.writeText(contenido);
})


//Bloquear mayus y caracteres especiales
const textarea = document.querySelector('.textbox');
textarea.addEventListener('input', function() {
    const inputValue = this.value;
    const sanitizedValue = inputValue.replace(/[^a-z\s]/g, '');
    this.value = sanitizedValue;
});

