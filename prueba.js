let aux;
let contenedorImagen=document.getElementById("resultado")
let contenedorImagen2=document.getElementById("resultado2")

let fila11=document.getElementsByClassName("fila1")
let fila22=document.getElementsByClassName("fila2")
let fila33=document.getElementsByClassName("fila3")

let array1 = [];
let array2 = [];
let array3 = [];
let valorDado;
let suma;
let suma2;
let suma3;


function tirarDado() {
    valorDado= Math.floor(Math.random() * 6) + 1;
    aux=`url(dados/dice${valorDado}.png)`;
    contenedorImagen.style.backgroundImage = `url(dados/dice${valorDado}.png)`
}

contenedorImagen.addEventListener("click", () =>{  
    tirarDado();
});

let fila1 = document.getElementById("fila1")
let fila2 = document.getElementById("fila2")
let fila3 = document.getElementById("fila3")
let columna = document.getElementsByClassName("col3")
let puntuacion1 = document.getElementById("puntuacion_1");
let puntuacion2 = document.getElementById("puntuacion_2");;
let puntuacion3= document.getElementById("puntuacion_3");;
let multi

fila1.addEventListener("click", function() {
  for (let i = 2; i >= 0; i--) {
      if (fila11[i].style.backgroundImage === "") {
          fila11[i].style.backgroundImage = aux;
          array1.push(valorDado)
          break;
      }
  }
 // Sumar los números correctamente
  let total = 0;

  // Para cada número en array1
  for (let i = 0; i < array1.length; i++) {
    let num = array1[i];

    // Solo contar si no hemos contado ese número antes
    let yaContado = false;

    // Revisamos si el número ya ha sido contado
    for (let j = 0; j < i; j++) {
      if (array1[j] === num) {
        yaContado = true; // Si ya lo hemos contado, no lo sumamos
        break;
      }
    }

    // Si no se ha contado antes, lo sumamos
    if (!yaContado) {
      let veces = 0;

      // Contar cuántas veces aparece el número
      for (let j = 0; j < array1.length; j++) {
        if (array1[j] === num) {
          veces++;
        }
      }

      // Sumar número * veces
      total += num * veces;
    }
  }

  // Mostrar la puntuación
  console.log("Puntuación final:", total);
});


fila2.addEventListener("click", function() {
    for (let i = 0; i < 3; i++) {
        if (fila22[i].style.backgroundImage === "") {
            fila22[i].style.backgroundImage = aux;
            array2.push(valorDado)
            break;
        }
    }

    suma2=0
    for(let j=0;j<array2.length;j++){
        suma2+=array2[j]
        puntuacion2.innerHTML=(`<h1>${suma2}<h1>`)
    }
        contenedorImagen.style.backgroundImage=("")
});

fila3.addEventListener("click", function() {
    for (let i = 0; i < 3; i++) {
        if (fila33[i].style.backgroundImage === "") {
            fila33[i].style.backgroundImage = aux;
            array3.push(valorDado)
            break;
        }
    }

  suma3=0
    for(let j=0;j<array3.length;j++){
        suma3+=array3[j]
        puntuacion3.innerHTML=(`<h1>${suma3}<h1>`)    
}
    
    contenedorImagen.style.backgroundImage=("")
});

