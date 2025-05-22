let enviarIniciarSesion=document.getElementById("boton2");

enviarIniciarSesion.addEventListener("click", function () {
    //Guardamos en el LocalStorage
    let usuarioJSON=localStorage.getItem("usuario");

    let jugador = JSON.parse(usuarioJSON);
    console.log(jugador);
});