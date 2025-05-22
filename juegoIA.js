//---JUGADOR 1--
localStorage.removeItem("ganador");
//VARIABLES
//turno
let turnoJugador = Math.random() < 0.5;
//Variable auxiliar para el dado obtenido
let aux;
//Contenedor para la imagen de lanzar el dado
let contenedorImagen = document.getElementById("lanzarDado");
//Clases para las casillas de las filas del primer jugador
let casillas_fila_1 = document.getElementsByClassName("Fila1");
let casillas_fila_2 = document.getElementsByClassName("Fila2");
let casillas_fila_3 = document.getElementsByClassName("Fila3");
//Arrays para guardar los dados del jugador uno (por filas)
let dados_fila_1 = [];
let dados_fila_2 = [];
let dados_fila_3 = [];
//Math.random para saber que dado sale al tirar
let valorDado;
//Variable para saber si se ha colocado el dado o no
let dadoTirado = false;
//Id de cada fila del primer jugador
let fila1_id = document.getElementById("fila1");
let fila2_id = document.getElementById("fila2");
let fila3_id = document.getElementById("fila3");
//Puntuaciones de cada fila
let puntuacion1 = document.getElementById("puntuacion_1");
let puntuacion2 = document.getElementById("puntuacion_2");
let puntuacion3 = document.getElementById("puntuacion_3");
//Puntuacion por fila
let total_fila_1 = 0;
let total_fila_2 = 0;
let total_fila_3 = 0;
//Puntuacion total
let total_filas_sumadas = 0;
//Mostrar la puntuacion final
let totalFinalJ1 = document.getElementById("totalJ1");

//FUNCIONES
//Funcion para tirar el dado
function tirarDado() {
  valorDado = Math.floor(Math.random() * 6) + 1;

  //aux para la imagen del dado
  aux = `url(imagenes/dice${valorDado}.png)`;
  //imagen del dado en la casilla de lanzar dado
  contenedorImagen.style.backgroundImage = aux;

  dadoTirado = true;
}

//Funcion para calcular la puntuacion por fila del jugador 1
function calcularPuntuacion(array) {
  let puntuacion = 0;

  //recorremos cada número en el array
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let veces = 0;

    //contamos cuántas veces aparece el número en el array
    for (let j = 0; j < array.length; j++) {
      if (array[j] === num) {
        veces++;
      }
    }
    //multiplicamos el número por las veces que aparece y lo sumamos a la puntuación
    puntuacion += num * veces;
  }

  return puntuacion;
}

//Funcion para calcular la puntuacion total del jugador 1
function resultadofinal() {
  total_filas_sumadas = total_fila_1 + total_fila_2 + total_fila_3;
  totalFinalJ1.innerHTML = `<p style="margin-top: 6px;">Puntos: ${total_filas_sumadas}<p>`;
  return console.log("Puntuación j1:", total_filas_sumadas);
}

//EVENTOS
//Evento para clickar en la casilla de lanzar dado
contenedorImagen.addEventListener("click", () => {
  //condicional para que no se vuelva a lanzar el dado sin colocarlo
  if (dadoTirado) return alert("Coloca el dado primero");
  //llamada a la función tirarDado
  tirarDado();
  colocardadoaudio.play();
});

//Evento para colocar el dado el las casillas de la fila 1 del jugador 1
fila1_id.addEventListener("click", function () {
  if (!turnoJugador) {
    alert("No es tu turno");
    return;
  }

  //condicional para no poder volver a tirar el dado si la fila esta llena
  if (dados_fila_1.length === 3) return;

  //condicional para que en el caso de colocar el dado haga:
  if (dadoTirado) {
    contenedorImagen.style.backgroundImage = "";

    //bucle para añadir al array de la fila 1 el valor del dado colocado
    for (let i = 2; i >= 0; i--) {
      if (casillas_fila_1[i].style.backgroundImage === "") {
        casillas_fila_1[i].style.backgroundImage = aux;
        dados_fila_1.push(valorDado);
        break;
      }
    }
    turnoJugador = false;
    cambiarColorCirculo();
    eliminarDado(dados_fila_1_j2, dados_fila_1, casillas_fila_1_j2);
    actualizarTodasLasPuntuaciones();
    dadoTirado = false;
  }
});

//Evento para colocar el dado el las casillas de la fila 2 del jugador 1
fila2_id.addEventListener("click", function () {
  if (!turnoJugador) {
    alert("No es tu turno");
    return;
  }
  //condicional para no poder volver a tirar el dado si la fila esta llena
  if (dados_fila_2.length === 3) return;

  //condicional para que en el caso de colocar el dado haga:
  if (dadoTirado) {
    contenedorImagen.style.backgroundImage = "";
    //bucle para añadir al array de la fila 2 el valor del dado colocado
    for (let i = 2; i >= 0; i--) {
      if (casillas_fila_2[i].style.backgroundImage === "") {
        casillas_fila_2[i].style.backgroundImage = aux;
        dados_fila_2.push(valorDado);
        break;
      }
    }
    turnoJugador = false;
    cambiarColorCirculo();
    eliminarDado(dados_fila_2_j2, dados_fila_2, casillas_fila_2_j2);
    actualizarTodasLasPuntuaciones();
    dadoTirado = false;
  }
});

//Evento para colocar el dado el las casillas de la fila 3 del jugador 1
fila3_id.addEventListener("click", function () {
  if (!turnoJugador) {
    alert("No es tu turno");
    return;
  }
  //condicional para no poder volver a tirar el dado si la fila esta llena
  if (dados_fila_3.length === 3) return;

  //condicional para que en el caso de colocar el dado haga:
  if (dadoTirado) {
    contenedorImagen.style.backgroundImage = "";

    //bucle para añadir al array de la fila 3 el valor del dado colocado
    for (let i = 2; i >= 0; i--) {
      if (casillas_fila_3[i].style.backgroundImage === "") {
        casillas_fila_3[i].style.backgroundImage = aux;
        dados_fila_3.push(valorDado);
        break;
      }
    }
    turnoJugador = false;
    cambiarColorCirculo();
    eliminarDado(dados_fila_3_j2, dados_fila_3, casillas_fila_3_j2);
    actualizarTodasLasPuntuaciones();
    dadoTirado = false;
  }
});

//---JUGADOR 2--
//VARIABLES
//Clases para las casillas de las filas
let casillas_fila_1_j2 = document.getElementsByClassName("Fila1_jugador2");
let casillas_fila_2_j2 = document.getElementsByClassName("Fila2_jugador2");
let casillas_fila_3_j2 = document.getElementsByClassName("Fila3_jugador2");
//Arrays para guardar los dados del jugador dos (por filas)
let dados_fila_1_j2 = [];
let dados_fila_2_j2 = [];
let dados_fila_3_j2 = [];
//Id de cada fila del segundo jugador
let fila1_jugador2_id = document.getElementById("fila1_jugador2");
let fila2_jugador2_id = document.getElementById("fila2_jugador2");
let fila3_jugador2_id = document.getElementById("fila3_jugador2");
//Puntuaciones de cada fila
let puntuacion1_jugador2 = document.getElementById("puntuacion_1_jugador2");
let puntuacion2_jugador2 = document.getElementById("puntuacion_2_jugador2");
let puntuacion3_jugador2 = document.getElementById("puntuacion_3_jugador2");
//Puntuacion por fila
let total_fila_1_j2 = 0;
let total_fila_2_j2 = 0;
let total_fila_3_j2 = 0;
//Puntuacion total
let total_filas_sumadas_j2 = 0;
//Mostrar la puntuacion final
let totalFinalJ2 = document.getElementById("totalJ2");

//FUNCIONES
//Funcion para calcular la puntuacion por fila del jugador 2
function calcularPuntuacion_jugador2(array_jugador2) {
  let puntuacion_jugador2 = 0;

  //recorremos cada número en el array
  for (let i = 0; i < array_jugador2.length; i++) {
    let num = array_jugador2[i];
    let veces = 0;

    //contamos cuántas veces aparece el número en el array
    for (let j = 0; j < array_jugador2.length; j++) {
      if (array_jugador2[j] === num) {
        veces++;
      }
    }
    //multiplicamos el número por las veces que aparece y lo sumamos a la puntuación
    puntuacion_jugador2 += num * veces;
  }

  return puntuacion_jugador2;
}

//Funcion para calcular la puntuacion total del jugador 2
function resultadofinal_jugador2() {
  total_filas_sumadas_j2 = total_fila_1_j2 + total_fila_2_j2 + total_fila_3_j2;
  totalFinalJ2.innerHTML = `<p style="margin-top: 6px;">Puntos: ${total_filas_sumadas_j2}</p>`;
  return console.log("Puntuacón j2", total_filas_sumadas_j2);
}

//EVENTOS
//Evento para colocar el dado el las casillas de la fila 1 del jugador 2
fila1_jugador2_id.addEventListener("click", function () {
  if (turnoJugador) {
    alert("No es tu turno");
    return;
  }
  //condicional para no poder volver a tirar el dado si la fila esta llena
  if (dados_fila_1_j2.length === 3) return;

  //condicional para que en el caso de colocar el dado haga:
  if (dadoTirado) {
    contenedorImagen.style.backgroundImage = "";

    //bucle para añadir al array de la fila 1 el valor del dado colocado
    for (let i = 0; i < 3; i++) {
      if (casillas_fila_1_j2[i].style.backgroundImage === "") {
        casillas_fila_1_j2[i].style.backgroundImage = aux;
        dados_fila_1_j2.push(valorDado);
        break;
      }
    }
    turnoJugador = true;
    cambiarColorCirculo();
    eliminarDado(dados_fila_1, dados_fila_1_j2, casillas_fila_1);
    actualizarTodasLasPuntuaciones();
    dadoTirado = false;
  }
});

//Evento para colocar el dado el las casillas de la fila 2 del jugador 2
fila2_jugador2_id.addEventListener("click", function () {
  if (turnoJugador) {
    alert("No es tu turno");
    return;
  }
  //condicional para no poder volver a tirar el dado si la fila esta llena
  if (dados_fila_2_j2.length === 3) return;

  //condicional para que en el caso de colocar el dado haga:
  if (dadoTirado) {
    contenedorImagen.style.backgroundImage = "";
    //bucle para añadir al array de la fila 2 el valor del dado colocado
    for (let i = 0; i < 3; i++) {
      if (casillas_fila_2_j2[i].style.backgroundImage === "") {
        casillas_fila_2_j2[i].style.backgroundImage = aux;
        dados_fila_2_j2.push(valorDado);
        break;
      }
    }
    turnoJugador = true;
    cambiarColorCirculo();
    eliminarDado(dados_fila_2, dados_fila_2_j2, casillas_fila_2);
    actualizarTodasLasPuntuaciones();
    dadoTirado = false;
  }
});

//Evento para colocar el dado el las casillas de la fila 3 del jugador 2
fila3_jugador2_id.addEventListener("click", function () {
  if (turnoJugador) {
    alert("No es tu turno");
    return;
  }
  //condicional para no poder volver a tirar el dado si la fila esta llena
  if (dados_fila_3_j2.length === 3) return;

  //condicional para que en el caso de colocar el dado haga:
  if (dadoTirado) {
    contenedorImagen.style.backgroundImage = "";

    //bucle para añadir al array de la fila 3 el valor del dado colocado
    for (let i = 0; i < 3; i++) {
      if (casillas_fila_3_j2[i].style.backgroundImage === "") {
        casillas_fila_3_j2[i].style.backgroundImage = aux;
        dados_fila_3_j2.push(valorDado);
        break;
      }
    }
    turnoJugador = true;
    cambiarColorCirculo();
    eliminarDado(dados_fila_3, dados_fila_3_j2, casillas_fila_3);
    actualizarTodasLasPuntuaciones();
    dadoTirado = false;
  }
});

//CAMBIAMOS LO RELACIONADO AL COLOR DEL CIRCULO
//creamos las variables del circulo de cada jugador
let circuloJ1 = document.getElementById("circulo_jugador1");
let circuloJ2 = document.getElementById("circulo_jugador2");

// Cambiar el color del circulo dependiendo de quien sea el turno
function cambiarColorCirculo() {
  if (turnoJugador) {
    circuloJ1.style.backgroundColor = "green";
    circuloJ2.style.backgroundColor = "white";
  } else {
    circuloJ1.style.backgroundColor = "white";
    circuloJ2.style.backgroundColor = "green";
  }
}


//FUNCION ELIMINAR DADO
function eliminarDado(arrayObjetivo, arrayPropio, casillasObjetivo) {
  let valorAEliminar = arrayPropio[arrayPropio.length - 1];

  for (let i = arrayObjetivo.length - 1; i >= 0; i--) {
    if (arrayObjetivo[i] === valorAEliminar) {
      arrayObjetivo.splice(i, 1); // Eliminamos del array
      // Eliminamos visualmente el dado de la casilla correspondiente
      actualizarImagenesFila(arrayObjetivo, casillasObjetivo);
    }
  }
}
//FUNCION PARA ACTUALZAR LAS IMAGENES DE LOS DADOS
function actualizarImagenesFila(array, casillas) {
  for (let i = 0; i < casillas.length; i++) {
    casillas[i].style.backgroundImage = "";
  }

  let startIndex;
  if (turnoJugador) {
    startIndex = casillas.length - array.length; // alineado a la derecha
  } else {
    startIndex = 0; // alineado a la izquierda
  }

  for (let i = 0; i < array.length; i++) {
    let index = startIndex + i;
    if (casillas[index]) {
      casillas[index].style.backgroundImage = `url(imagenes/dice${array[i]}.png)`;
    }
  }
}
//FUNCION PARA ACTUALIZAR LAS PUNTUACIONES
function actualizarTodasLasPuntuaciones() {
  total_fila_1 = calcularPuntuacion(dados_fila_1);
  total_fila_2 = calcularPuntuacion(dados_fila_2);
  total_fila_3 = calcularPuntuacion(dados_fila_3);

  total_fila_1_j2 = calcularPuntuacion_jugador2(dados_fila_1_j2);
  total_fila_2_j2 = calcularPuntuacion_jugador2(dados_fila_2_j2);
  total_fila_3_j2 = calcularPuntuacion_jugador2(dados_fila_3_j2);

  puntuacion1_jugador2.innerHTML = `<p>${total_fila_1_j2}<p>`;
  puntuacion2_jugador2.innerHTML = `<p>${total_fila_2_j2}<p>`;
  puntuacion3_jugador2.innerHTML = `<p>${total_fila_3_j2}<p>`;

  puntuacion1.innerHTML = `<p>${total_fila_1}<p>`;
  puntuacion2.innerHTML = `<p>${total_fila_2}<p>`;
  puntuacion3.innerHTML = `<p>${total_fila_3}<p>`;

  resultadofinal();
  resultadofinal_jugador2();
  //si la suma de los tamaños de los 3 arrays es 9, se acaba el juego
  if (
    dados_fila_1.length + dados_fila_2.length + dados_fila_3.length === 9 ||
    dados_fila_1_j2.length + dados_fila_2_j2.length + dados_fila_3_j2.length === 9
  ) {
    verificarGanador();
  }
}


//FUNCION PARA VERIFICAR AL GANADOR
function verificarGanador() {
  if (total_filas_sumadas > total_filas_sumadas_j2) {
    localStorage.setItem("ganador", "Jugador 1");
  } else if (total_filas_sumadas < total_filas_sumadas_j2) {
    localStorage.setItem("ganador", "Jugador 2");
  } else {
    localStorage.setItem("ganador", "Empate");
  }

  window.location.href = "ganador.html";
}
//Inicializamos el color del circulo
cambiarColorCirculo();



//AQUI ESTA TODO LO RELACIONADO CON LOS FONDOS DE LOS POKEMONS

//CAMBIAR LOS FONDOS SEGUN EL POKEMON
let poke1 = localStorage.getItem("PokemonJ1");
let poke2 = localStorage.getItem("PokemonJ2");
let poke3 = localStorage.getItem("PokemonJ3");
let poke4 = localStorage.getItem("PokemonJ4");
let poke5 = localStorage.getItem("PokemonJ5");
let poke6 = localStorage.getItem("PokemonJ6");
let poke7 = localStorage.getItem("PokemonJ7");
let poke8 = localStorage.getItem("PokemonJ8");

//cambiar fondo dependiendo del pokemon por localStorage
//OPTIMIZAR SI HAY TIEMPO
if (poke1 == "P1") {
    cambiarFondo("imagenes/FondoP1.png");
}else if(poke2=="P2"){
    cambiarFondo("imagenes/FondoP2.png");
}else if(poke3=="P3"){
    cambiarFondo("imagenes/FondoP3.png");
}else if(poke4=="P4"){
    cambiarFondo("imagenes/FondoP4.png");
}else if(poke5=="P5"){
    cambiarFondo("imagenes/FondoP5.png");
}else if(poke6=="P6"){
    cambiarFondo("imagenes/FondoP6.png");
}else if(poke7=="P7"){
    cambiarFondo("imagenes/FondoP7.png");
}else if(poke8=="P8"){
    cambiarFondo("imagenes/FondoP8.png");
}

// Cambiar el fondo de la página dependiendo del pokemon
function cambiarFondo(url) {
  document.body.style.backgroundImage = `url(${url})`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "100% 100%";
  document.body.style.backgroundPosition = "center";
}


let tirardadoaudio=new Audio('./audio/tirar.mp3');
let colocardadoaudio = new Audio('./audio/colocar.mp3');

