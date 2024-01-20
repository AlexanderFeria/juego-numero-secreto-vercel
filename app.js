let listaNumerosSorteados = [];
let numeroSecreto = 0;
let intentos = 0;
let limiteInferior = 1;
let limiteSuperior = 10;

function asignarTextElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroUsuario = document.getElementById("valorUsuario").value;
  numeroUsuario = parseInt(numeroUsuario);
  if (numeroSecreto === numeroUsuario) {
    //alert(`FELICIDADES!! ACERTASTE`);
    asignarTextElemento(
      "p",
      `FELICIDADES!! ACERTASTE EL NUMERO. Lo hiciste en ${intentos} ${
        intentos == 1 ? "intento" : "intentos"
      }`
    );
    habilitarBotonNuevoJuego(true);
  } else {
    if (numeroUsuario > numeroSecreto) {
      // alert(`El número secreto es menor`);
      asignarTextElemento("p", "El número secreto es menor");
    } else {
      //alert(`El número secreto es mayor`);
      asignarTextElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function habilitarBotonNuevoJuego(habilitar) {
  let btnNuevoJuego = document.getElementById("reiniciar");
  if (habilitar) {
    btnNuevoJuego.removeAttribute("disabled");
  } else {
    btnNuevoJuego.setAttribute("disabled", true);
  }
}
function reiniciarJuego() {
  //limpiarCaja
  limpiarCaja();
  //Indicar el mensaje de intervalo de numeros
  //Generar el numero aleatorio
  //reiniciar el numero de intentos
  condicionesIniciales();
  //Deshabilitar el boton nuevo juego
  habilitarBotonNuevoJuego(false);
}

function condicionesIniciales() {
  asignarTextElemento("h1", "Juego del número secreto");
  asignarTextElemento(
    "p",
    `Indica un numero entre el ${limiteInferior} y ${limiteSuperior}`
  );
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  document.querySelector("#valorUsuario").focus();
}
function generarNumeroSecreto() {
  let numeroGenerado =
    Math.floor(Math.random() * limiteSuperior) + limiteInferior;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length == limiteSuperior) {
    asignarTextElemento('p','Ya se sortearon todos los números posibles')
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function limpiarCaja() {
  let caja = document.querySelector("#valorUsuario");
  caja.value = "";
  caja.focus();
}
condicionesIniciales();
document.getElementById("valorUsuario").focus();
