window.addEventListener('load', function () {

    botonEncriptar();

    botonDesencriptar();

    botonCopiar();
})


const text = document.querySelector("#texto");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const sinMensaje = document.querySelector(".sinmensaje");
const textSalida = document.querySelector(".textsalida");
const tSalida = document.querySelector("#tsalida");
const mSalida = document.querySelector("#mSalida");
const btnCopiar = document.querySelector("#copiar");
const bCopiar= document.querySelector(".bCopiar")

/* ---------------Recibir texto encriptado--------------- */
function normalizar() {
  let capturar = capturarTexto(text.value);
  let normalizar = normalizarTexto(capturar);
  //console.log(normalizar);
  return normalizar;
}

/* ---------------Recibir texto encriptado--------------- */

function botonEncriptar() {
    btnEncriptar.addEventListener("click", function (e) {
    e.preventDefault();

    console.log("Encriptando...");

    let textoNormalizado = normalizar();

    if (textoNormalizado.length >= 1) {
        let encriptado = encriptarTexto(textoNormalizado);

        textoNormalizado = encriptado;

        sinMensaje.classList.add("ocultar");
        
        textSalida.classList.remove("ocultar");

        bCopiar.classList.remove("ocultar")

        tSalida.innerHTML = `<textarea id="mSalida">${encriptado}</textarea>`;

        console.log(encriptado);

        return encriptado;
        } else {
            sinMensaje.classList.remove("ocultar");
            textSalida.classList.add("ocultar");
            bCopiar.classList.add("ocultar")

            console.error('Ingrese el texto a encriptar');
        }
    });
}

/* ---------------Desencriptar texto--------------- */

function botonDesencriptar() {
    
    btnDesencriptar.addEventListener('click', function (e) {
        e.preventDefault();
        
        console.log('Desencriptando...');
        
        let textoNormalizado = normalizar();

        if (textoNormalizado.length >= 1) {
            let desencriptado = desencriptarTexto(textoNormalizado);
    
            textoNormalizado = desencriptado;
    
            sinMensaje.classList.add("ocultar");
            textSalida.classList.remove("ocultar");
            bCopiar.classList.remove("ocultar")

    
            tSalida.innerHTML = `<textarea id="mSalida">${desencriptado}</textarea>`;
    
            console.log(desencriptado);
    
            return desencriptado;
            } else {
                sinMensaje.classList.remove("ocultar");
                textSalida.classList.add("ocultar");
                bCopiar.classList.add("ocultar")

                
                console.error('Ingrese el texto a desencriptar');
            }
        });
    }
    

/* ---------------Copiar texto--------------- */
btnCopiar.addEventListener("click", function (e) {
    e.preventDefault();

    const salida = document.querySelector("#mSalida").value;

    navigator.clipboard.writeText(salida);

    console.error(`Texto copiado = ${salida}`);
});

/* ---------------Código--------------- */
let codigo = {
    e : 'enter',
    i : 'imes',
    a : 'ai',
    o : 'ober',
    u : 'ufat'
  }
  
  /* ---------------Capturar el texto ingresado por el usuario--------------- */
  
  function capturarTexto(texto) {
    let datos = texto;
  
    return datos
  }
  
  /* ---------------Eliminar acentos--------------- */
  
  const eliminarAcentos = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 
  
  /* ---------------Normalizar texto--------------- */
  function normalizarTexto(texto) {
    return eliminarAcentos(texto.toLowerCase().trim());
  }
  
  /* ---------------Encriptar Texto--------------- */
  
  function encriptarTexto(texto) {
    let textoEncriptado = '';
    
    for (let vocal in codigo) {
      textoEncriptado = texto.replaceAll(vocal, codigo[vocal]);
      texto = textoEncriptado;
    }
  
    return textoEncriptado
  } 
  
  let tEncriptado = encriptarTexto();
  
  /* ----------------Desencriptar Texto--------------- */
  function desencriptarTexto(tEncriptado) {
      let textoDesencriptado = '';
    for (let vocal in codigo) {
      textoDesencriptado = tEncriptado.replaceAll(codigo[vocal], vocal)
    
      tEncriptado = textoDesencriptado
    }
  
    return textoDesencriptado;
  
    } 
  
    let tDesencriptado = desencriptarTexto()
  
    
