//---JUGADOR 1--
//VARIABLES
//Variable auxiliar para el dado obtenido
let aux;
//Contenedor para la imagen de lanzar el dado
let contenedorImagen=document.getElementById("lanzarDado")
//Clases para las casillas de las filas del primer jugador
let fila_1=document.getElementsByClassName("Fila1")
let fila_2=document.getElementsByClassName("Fila2")
let fila_3=document.getElementsByClassName("Fila3")
//Arrays para guardar los dados del jugador uno (por filas)
let array1 = [];
let array2 = [];
let array3 = [];
//Math.random para saber que dado sale al tirar
let valorDado;
//Variable para saber si se ha colocado el dado o no
let dadoTirado = false;
//Id de cada fila del primer jugador
let fila1 = document.getElementById("fila1")
let fila2 = document.getElementById("fila2")
let fila3 = document.getElementById("fila3")
//Puntuaciones de cada fila
let puntuacion1 = document.getElementById("puntuacion_1");
let puntuacion2 = document.getElementById("puntuacion_2");
let puntuacion3 = document.getElementById("puntuacion_3");
//Puntuacion por fila
let total=0;
let total2=0;
let total3=0;
//Puntuacion total
let totaldefinitivo=0
//Mostrar la puntuacion final
let totalFinalJ1=document.getElementById("totalJ1")


//FUNCIONES
//Funcion para tirar el dado
function tirarDado() {
    valorDado = Math.floor(Math.random() * 6) + 1;

    //aux para la imagen del dado
    aux = `url(imagenes/dice${valorDado}.png)`;
    //imagen del dado en la casilla de lanzar dado
    contenedorImagen.style.backgroundImage = `url(imagenes/dice${valorDado}.png)`;

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
function resultadofinal(){
  totaldefinitivo=total+total2+total3
  totalFinalJ1.innerHTML = `<p style="margin-top: 6px;">Puntos: ${totaldefinitivo}<p>`;
  return console.log(totaldefinitivo)
}


//EVENTOS
//Evento para clickar en la casilla de lanzar dado
contenedorImagen.addEventListener("click", () => {
    //condicional para que no se vuelva a lanzar el dado sin colocarlo
    if(dadoTirado) return alert("profe hijodeputa comeme los huevos");
    //llamada a la función tirarDado
    tirarDado();
});


//Evento para colocar el dado el las casillas de la fila 1 del jugador 1
fila1.addEventListener("click", function () {
    //condicional para no poder volver a tirar el dado si la fila esta llena
    if (array1.length === 3) return;

    //condicional para que en el caso de colocar el dado haga: 
    if (dadoTirado) {
        contenedorImagen.style.backgroundImage = "";

        //bucle para añadir al array de la fila 1 el valor del dado colocado
        for (let i = 2; i >= 0; i--) {
            if (fila_1[i].style.backgroundImage === "") {
                fila_1[i].style.backgroundImage = aux;
                array1.push(valorDado);
                break;
            }
        }

        //calcular el total de la puntuacion de la fila 1
        total = calcularPuntuacion(array1);
        //mostrar la puntuacion de la fila 1
        puntuacion1.innerHTML = `<p>${total}<p>`;
        //llamada a la funcion para calcular la puntuacion total del jugador 1
        resultadofinal();
    }

    //En caso de no colocar el dado:
    dadoTirado = false
});


//Evento para colocar el dado el las casillas de la fila 2 del jugador 1
fila2.addEventListener("click", function () {
    //condicional para no poder volver a tirar el dado si la fila esta llena
    if (array2.length === 3) return;

    //condicional para que en el caso de colocar el dado haga: 
    if(dadoTirado){
        contenedorImagen.style.backgroundImage = "";
        //bucle para añadir al array de la fila 2 el valor del dado colocado
        for (let i = 2; i >= 0; i--) {
            if (fila_2[i].style.backgroundImage === "") {
                fila_2[i].style.backgroundImage = aux;
                array2.push(valorDado);
            break;
            }
        }   
    
        //calcular el total de la puntuacion de la fila 2
        total2=calcularPuntuacion(array2);
        //mostrar la puntuacion de la fila 2
        puntuacion2.innerHTML = `<p>${total2}<p>`;
        //llamada a la funcion para calcular la puntuacion total del jugador 1
        resultadofinal();
    }

    //En caso de no colocar el dado:
    dadoTirado = false;
});

//Evento para colocar el dado el las casillas de la fila 3 del jugador 1
fila3.addEventListener("click", function () {
    //condicional para no poder volver a tirar el dado si la fila esta llena
    if (array3.length === 3) return;

    //condicional para que en el caso de colocar el dado haga: 
    if(dadoTirado){
        contenedorImagen.style.backgroundImage = "";
        
        //bucle para añadir al array de la fila 3 el valor del dado colocado
        for (let i = 2; i >= 0; i--) {
            if (fila_3[i].style.backgroundImage === "") {
            fila_3[i].style.backgroundImage = aux;
            array3.push(valorDado);
            break;
            }
        }

        //calcular el total de la puntuacion de la fila 3
        total3=calcularPuntuacion(array3);
        //mostrar la puntuacion de la fila 3
        puntuacion3.innerHTML = `<p>${total3}<p>`;
        //llamada a la funcion para calcular la puntuacion total del jugador 1
        resultadofinal();   
    }
   
    //En caso de no colocar el dado:
    dadoTirado = false;
});











//---JUGADOR 2--
//VARIABLES
//Clases para las casillas de las filas
let fila_1_jugador2=document.getElementsByClassName("Fila1_jugador2")
let fila_2_jugador2=document.getElementsByClassName("Fila2_jugador2")
let fila_3_jugador2=document.getElementsByClassName("Fila3_jugador2")
//Arrays para guardar los dados del jugador dos (por filas)
let array1_jugador2 = [];
let array2_jugador2 = [];
let array3_jugador2 = [];
//Id de cada fila del segundo jugador
let fila1_jugador2 = document.getElementById("fila1_jugador2")
let fila2_jugador2 = document.getElementById("fila2_jugador2")
let fila3_jugador2 = document.getElementById("fila3_jugador2")
//Puntuaciones de cada fila
let puntuacion1_jugador2 = document.getElementById("puntuacion_1_jugador2");
let puntuacion2_jugador2 = document.getElementById("puntuacion_2_jugador2");
let puntuacion3_jugador2 = document.getElementById("puntuacion_3_jugador2");
//Puntuacion por fila
let total_jugador2=0;
let total2_jugador2=0;
let total3_jugador2=0;
//Puntuacion total
let totaldefinitivo_jugador2=0
//Mostrar la puntuacion final
let totalFinalJ2=document.getElementById("totalJ2")


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
function resultadofinal_jugador2(){
    totaldefinitivo_jugador2=total_jugador2+total2_jugador2+total3_jugador2
    totalFinalJ2.innerHTML = `<p style="margin-top: 6px;">Puntos: ${totaldefinitivo_jugador2}</p>`;
    return console.log(totaldefinitivo_jugador2)
}


//EVENTOS
//Evento para colocar el dado el las casillas de la fila 1 del jugador 2
fila1_jugador2.addEventListener("click", function () {
    //condicional para no poder volver a tirar el dado si la fila esta llena
    if (array1_jugador2.length === 3) return;

    //condicional para que en el caso de colocar el dado haga: 
    if (dadoTirado) {
        contenedorImagen.style.backgroundImage = "";

        //bucle para añadir al array de la fila 1 el valor del dado colocado
        for (let i = 0; i < 3; i++) {
            if (fila_1_jugador2[i].style.backgroundImage === "") {
                fila_1_jugador2[i].style.backgroundImage = aux;
                array1_jugador2.push(valorDado);
                break;
            }
        }

        //calcular el total de la puntuacion de la fila 1
        total_jugador2 = calcularPuntuacion_jugador2(array1_jugador2);
        //mostrar la puntuacion de la fila 1
        puntuacion1_jugador2.innerHTML = `<p>${total_jugador2}<p>`;
        //llamada a la funcion para calcular la puntuacion total del jugador 2
        resultadofinal_jugador2();
    }

    //En caso de no colocar el dado:
    dadoTirado = false
});


//Evento para colocar el dado el las casillas de la fila 2 del jugador 2
fila2_jugador2.addEventListener("click", function () {
    //condicional para no poder volver a tirar el dado si la fila esta llena
    if (array2_jugador2.length === 3) return;

    //condicional para que en el caso de colocar el dado haga: 
    if(dadoTirado){
        contenedorImagen.style.backgroundImage = "";
        //bucle para añadir al array de la fila 2 el valor del dado colocado
        for (let i = 0; i < 3; i++) {
            if (fila_2_jugador2[i].style.backgroundImage === "") {
                fila_2_jugador2[i].style.backgroundImage = aux;
                array2_jugador2.push(valorDado);
            break;
            }
        }   
    
        //calcular el total de la puntuacion de la fila 2
        total2_jugador2=calcularPuntuacion(array2_jugador2);
        //mostrar la puntuacion de la fila 2
        puntuacion2_jugador2.innerHTML = `<p>${total2_jugador2}<p>`;
        //llamada a la funcion para calcular la puntuacion total del jugador 2
        resultadofinal_jugador2();
    }

    //En caso de no colocar el dado:
    dadoTirado = false;
});

//Evento para colocar el dado el las casillas de la fila 3 del jugador 2
fila3_jugador2.addEventListener("click", function () {
    //condicional para no poder volver a tirar el dado si la fila esta llena
    if (array3_jugador2.length === 3) return;

    //condicional para que en el caso de colocar el dado haga: 
    if(dadoTirado){
        contenedorImagen.style.backgroundImage = "";
        
        //bucle para añadir al array de la fila 3 el valor del dado colocado
        for (let i = 0; i < 3; i++) {
            if (fila_3_jugador2[i].style.backgroundImage === "") {
            fila_3_jugador2[i].style.backgroundImage = aux;
            array3_jugador2.push(valorDado);
            break;
            }
        }

        //calcular el total de la puntuacion de la fila 3
        total3_jugador2=calcularPuntuacion_jugador2(array3_jugador2);
        //mostrar la puntuacion de la fila 3
        puntuacion3_jugador2.innerHTML = `<p>${total3_jugador2}<p>`;
        //llamada a la funcion para calcular la puntuacion total del jugador 2
        resultadofinal_jugador2();   
    }
   
    //En caso de no colocar el dado:
    dadoTirado = false;
});






//PROGRAMACION DE LOS FONDOS
let clickerFondo1=document.getElementById("Pokemon1");
let fondo1 = document.querySelector("#fondo");

clickerFondo1.addEventListener("click", function () {
    fondo1.src = "./imagenes/fondoPokemons.png";
});
