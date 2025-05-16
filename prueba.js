let aux;
let contenedorImagen = document.getElementById("resultado");

let fila11 = document.getElementsByClassName("fila1");
let fila22 = document.getElementsByClassName("fila2");
let fila33 = document.getElementsByClassName("fila3");

let array1 = [];
let array2 = [];
let array3 = [];
let valorDado;
let dadoTirado = false;

function tirarDado() {
  valorDado = Math.floor(Math.random() * 6) + 1;
  aux = `url(dados/dice${valorDado}.png)`;
  contenedorImagen.style.backgroundImage = `url(dados/dice${valorDado}.png)`;
  dadoTirado = true;
}

contenedorImagen.addEventListener("click", () => {
  if(dadoTirado) return alert("profe hijodeputa comeme los huevos");
  tirarDado();

});

let fila1 = document.getElementById("fila1");
let fila2 = document.getElementById("fila2");
let fila3 = document.getElementById("fila3");
let columna = document.getElementsByClassName("col3");
let puntuacion1 = document.getElementById("puntuacion_1");
let puntuacion2 = document.getElementById("puntuacion_2");
let puntuacion3 = document.getElementById("puntuacion_3");
let total=0;
let total2=0;
let total3=0;
let totaldefinitivo=0


function calcularPuntuacion(array) {
  let puntuacion = 0;

  // Recorremos cada número en el array
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let veces = 0;

    // Contamos cuántas veces aparece el número en el array
    for (let j = 0; j < array.length; j++) {
      if (array[j] === num) {
        veces++;
      }
    }
    // Multiplicamos el número por las veces que aparece y lo sumamos a la puntuación
    puntuacion += num * veces;
  }
  return puntuacion;
}

function resultadofinal(){
  totaldefinitivo=total+total2+total3
  return console.log(totaldefinitivo)
}


fila1.addEventListener("click", function () {
  if (array1.length === 3) return;
  if (dadoTirado) {
    contenedorImagen.style.backgroundImage = "";

    for (let i = 2; i >= 0; i--) {
      if (fila11[i].style.backgroundImage === "") {
        fila11[i].style.backgroundImage = aux;
        array1.push(valorDado);
        break;
      }
    }
    total = calcularPuntuacion(array1);
    puntuacion1.innerHTML = `<h1>${total}<h1>`;
    resultadofinal();
  }
  dadoTirado = false
  console.log(array1)
});


fila2.addEventListener("click", function () {
  if (array2.length === 3) return;
  if(dadoTirado){
    contenedorImagen.style.backgroundImage = "";
    for (let i = 0; i < 3; i++) {
      if (fila22[i].style.backgroundImage === "") {
        fila22[i].style.backgroundImage = aux;
        array2.push(valorDado);
        break;
      }   
    }
    total2=calcularPuntuacion(array2)
    puntuacion2.innerHTML = `<h1>${total2}<h1>`;resultadofinal();
   }
   
  dadoTirado = false;
});


fila3.addEventListener("click", function () {
  if (array3.length === 3) return;
  if(dadoTirado){
    contenedorImagen.style.backgroundImage = "";
  
    for (let i = 0; i < 3; i++) {
      if (fila33[i].style.backgroundImage === "") {
        fila33[i].style.backgroundImage = aux;
        array3.push(valorDado);
        break;
      }
    }
    total3=calcularPuntuacion(array3)
    puntuacion3.innerHTML = `<h1>${total3}<h1>`;
    resultadofinal();   
   }
   
  dadoTirado = false;
});