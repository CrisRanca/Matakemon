//Evento para guardar la info
let enviarRegistrarse=document.getElementById("boton1");

enviarRegistrarse.addEventListener("click", function () {
    //Creamos el objeto
    let usuario={
        nombre: document.getElementById("username").value,
        correo: document.getElementById("email").value,
        contraseña:document.getElementById("password1").value,
    }

    //convertimos a JSON
    let usuarioJSON=JSON.stringify(usuario);

    //Guardamos en el LocalStorage
    localStorage.setItem("usuario", usuarioJSON);
});