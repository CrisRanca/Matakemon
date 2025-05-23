let enviarIniciarSesion=document.getElementById("boton2");

enviarIniciarSesion.addEventListener("click", function () {
    //Guardamos en el LocalStorage
    let usuarioJSON=localStorage.getItem("usuario");

    let jugador = JSON.parse(usuarioJSON);
    console.log(jugador);
});

//condicional para solo acceder si tienes cuenta
if (email === "" || password === "") {
alert("Por favor, completa todos los campos.");
return;
}else{
    enviarIniciarSesion.innerHTML= `<a href="pokemons.html"><button class="boton1" id="boton2" type="submit">Enviar</button></a>`
}