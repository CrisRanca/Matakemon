//Variable auxiliar para el dado obtenido
let aux;
//Contenedor para la imagen de lanzar el dado
let contenedorImagen=document.getElementById("lanzarDado")
//Casillas de la fila 1 del primer jugador
let fila_1=document.getElementsByClassName("Fila1")
let fila_2=document.getElementsByClassName("Fila2")
let fila_3=document.getElementsByClassName("Fila3")
//Arrays para guardar los dados del jugador uno (por filas)
let array1 = [];
let array2 = [];
let array3 = [];
//Math.random para saber que dado sale al tirar
let valorDado;
//Suma de la puntuaciones de los dados
let suma;
let suma2;
let suma3;

let fila1 = document.getElementById("fila1")
let fila2 = document.getElementById("fila2")
let fila3 = document.getElementById("fila3")
let puntuacion = document.getElementById("puntuacion")
let puntuacion2 = document.getElementsByClassName("puntuacion2")
let puntuacion3= document.getElementsByClassName("puntuacion3")
let multi

function tirarDado() {
    valorDado= Math.floor(Math.random() * 6) + 1;
    aux=`url(dados/dice${valorDado}.png)`;
    contenedorImagen.style.backgroundImage = `url(dados/dice${valorDado}.png)`
}

contenedorImagen.addEventListener("click", () =>{  
    tirarDado();
});



fila1.addEventListener("click", function() {
  for (let i = 2; i >= 0; i--) {
      if (fila_1[i].style.backgroundImage === "") {
          fila_1[i].style.backgroundImage = aux;
          array1.push(valorDado)
          break;
      }
  }
multi=0
  suma=0
    for (let i = 0; i < array1.length; i++) {
        suma += array1[i];
        for (let j = i + 1; j < array1.length; j++) {
            if(array1.includes(array1[i])){
                if(array1===2)
            }
        }
        puntuacion=suma;
        document.write=(`${puntuacion}`)
    }

    console.log(multi)
    console.log(array1)
    
})



fila2.addEventListener("click", function() {
    for (let i = 0; i < 3; i++) {
        if (fila_2[i].style.backgroundImage === "") {
            fila_2[i].style.backgroundImage = aux;
            array2.push(valorDado)
            break;
        }
    }

    suma2=0
    for(let j=0;j<array2.length;j++){
        suma2+=array1[j]
        suma2=puntuacion2;
        document.writeln(puntuacion2)
    }
        contenedorImagen.style.backgroundImage=("")
});

fila3.addEventListener("click", function() {
    for (let i = 0; i < 3; i++) {
        if (fila_3[i].style.backgroundImage === "") {
            fila_3[i].style.backgroundImage = aux;
            array3.push(valorDado)
            break;
        }
    }

  suma3=0
    for(let j=0;j<array3.length;j++){
        suma3+=array1[j]
        suma3=puntuacion3;
        document.writeln(puntuacion3)
    }
    
    contenedorImagen.style.backgroundImage=("")
});

