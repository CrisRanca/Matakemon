//CREAR LOS POKEMONS
let P1 = document.getElementById("Pokemon1");
let P2 = document.getElementById("Pokemon2");
let P3 = document.getElementById("Pokemon3");
let P4 = document.getElementById("Pokemon4");
let P5 = document.getElementById("Pokemon5");
let P6 = document.getElementById("Pokemon6");
let P7 = document.getElementById("Pokemon7");
let P8 = document.getElementById("Pokemon8");

//Creamos el JSON para los pokemons al pinchar en ellos
P1.addEventListener("click", function () {
    console.log("charmander");
    localStorage.setItem("PokemonJ1", "P1");
});

P2.addEventListener("click", function () {
    console.log("bulbasaur");
    localStorage.setItem("PokemonJ2", "P2");
});

P3.addEventListener("click", function () {
    console.log("squirtle");
    localStorage.setItem("PokemonJ3", "P3");
});

P4.addEventListener("click", function () {
    console.log("Pikachu");
    localStorage.setItem("PokemonJ4", "P4");
});

P5.addEventListener("click", function () {
    console.log("Bergmite");
    localStorage.setItem("PokemonJ5", "P5");
});

P6.addEventListener("click", function () {
    console.log("Haunter");
    localStorage.setItem("PokemonJ6", "P6");
});

P7.addEventListener("click", function () {
    console.log("Carbink");
    localStorage.setItem("PokemonJ7", "P7");
});

P8.addEventListener("click", function () {
    console.log("Nidoran");
    localStorage.setItem("PokemonJ8", "P8");
});


//ELIMINAR LOS POKEMONS
let eliminar = document.getElementById("eliminar");

eliminar.addEventListener("click", function () {
    console.log("eliminar");
    localStorage.removeItem("PokemonJ1");
    localStorage.removeItem("PokemonJ2");
    localStorage.removeItem("PokemonJ3");
    localStorage.removeItem("PokemonJ4");
    localStorage.removeItem("PokemonJ5");
    localStorage.removeItem("PokemonJ6");
    localStorage.removeItem("PokemonJ7");
    localStorage.removeItem("PokemonJ8");
});


