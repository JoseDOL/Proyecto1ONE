
let arrayEncrip = [
    {
        letra: "e",
        valor: "enter",
        regexv: /e/gi,
        regexd: /enter/gi
    },
    {
        letra: "i",
        valor: "imes",
        regexv: /i/gi,
        regexd: /imes/gi
        
    },
    {
        letra: "a",
        valor: "ai",
        regexv: /a/gi,
        regexd: /ai/gi
    },
    {
        letra: "o",
        valor: "ober",
        regexv: /o/gi,
        regexd: /ober/gi
    },
    {
        letra: "u",
        valor: "ufat",
        regexv: /u/gi,
        regexd: /ufat/gi
    },
]

function encriptarEntrada() {
    let textoentrada = document.getElementById("divEntrada").value
    if (textoentrada === "") {
        validacionText("Texto Vacio, escribe un texto primero", 1, "alerta1");
        return false;
    }
    validacionText("", 2, "alerta1");
    if (veriMayusculas(textoentrada)) {
        validacionText("Solo letras minúsculas", 1, "alerta1");
        return false;
    }
    validacionText("", 2, "alerta1");
    let entradarray = textoentrada.split("");
    arrayEncrip.forEach(element => {
        var re = element.regexv;
        for (let index = 0; index < entradarray.length; index++) {
            if (element.letra === entradarray[index]) {
                entradarray[index] = element.valor;
            }
        }
    });
    textoentrada = "";
    for (let j = 0; j < entradarray.length; j++) {
        textoentrada = textoentrada + entradarray[j];
    }
    document.getElementById("divSalida").innerHTML =  textoentrada;
}

function validacionText(mensaje, tipov, idcontenido) {
    let x = document.getElementById(idcontenido);
    switch (tipov) {
        case 1:
            x.style.display = "block";
            x.innerHTML = mensaje
            break;
        default:
            x.style.display = "none";
    }
}


function veriMayusculas(entrada) {
    entrada = String(entrada).trim();
    const regxs = {
        "lower": /^[a-z0-9 ]+$/,
        "upper": /^[A-Z0-9 ]+$/,
        "upperLower": /^[A-Za-z0-9 ]+$/
    }
    if (regxs.lower.test(entrada)) return false;
    if (regxs.upper.test(entrada)) return true;
    if (regxs.upperLower.test(entrada)) return true;
    return false;
}

function copiarTexto ()
{
    copiarAlPortapapeles();
    validacionText("Texto copiado con exito!!!", 1, "alertC");
    setTimeout(function(){
        validacionText("", 2, "alertC");
    }, 2000);

}

function copiarAlPortapapeles() {
    var enlace = document.getElementById("divSalida");
    var inputFalso = document.createElement("input");
    inputFalso.setAttribute("value", enlace.innerHTML);
    document.body.appendChild(inputFalso);
    inputFalso.select();
    document.execCommand("copy");
    document.body.removeChild(inputFalso);
    
}

function desncriptarEntrada() {
    let auxsalida;
    let textoentrada = document.getElementById("divEntrada").value
    if (textoentrada === "") {
        validacionText("Texto Vacio, escribe un texto primero", 1, "alerta1");
        return false;
    }
    validacionText("", 2, "alerta1");
    if (veriMayusculas(textoentrada)) {
        validacionText("Solo letras minúsculas", 1, "alerta1");
        return false;
    }
    auxsalida = textoentrada;
    validacionText("", 2, "alerta1");
   
    arrayEncrip.forEach(element => {
        var re = element.regexd;
        auxsalida = auxsalida.replace(re, element.letra);
    });
    
    document.getElementById("divSalida").innerHTML =  auxsalida;
}
