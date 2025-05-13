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

fila1.addEventListener("click", function() {
  for (let i = 2; i >= 0; i--) {
      if (fila11[i].style.backgroundImage === "") {
          fila11[i].style.backgroundImage = aux;
          array1.push(valorDado)
          break;
      }
  }

  suma=0
    for(let j=0;j<array1.length;j++){
        suma+=array1[j]
    }

    contenedorImagen.style.backgroundImage=("")
})

let arrayAux;



fila2.addEventListener("click", function() {
    for (let i = 0; i < 3; i++) {
        if (fila22[i].style.backgroundImage === "") {
            fila22[i].style.backgroundImage = aux;
            array2.push(valorDado)
            break;
        }
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
    contenedorImagen.style.backgroundImage=("")
});

