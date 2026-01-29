document.addEventListener("DOMContentLoaded", () => {

    //ocultar newsletter
    var x = document.getElementById("newsletter");
    x.style.display = "none"

    const noticias = document.querySelectorAll(".noticia");
    const tarjetas = document.querySelectorAll(".noti");
    const newsletter = document.querySelectorAll("#titulo3");
    newsletter.forEach(activo => {
        activo.addEventListener("click", () =>{
            x.style.display = "block"
        });
    });

    // Mostrar solo la primera noticia al cargar
    noticias[0].classList.add("activa");

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", () => {

            const idObjetivo = tarjeta.dataset.target;

            // Ocultar todas las noticias
            noticias.forEach(n => n.classList.remove("activa"));

            // Mostrar la noticia correspondiente
            document.getElementById(idObjetivo).classList.add("activa");

            // Resaltar la tarjeta pulsada
            tarjetas.forEach(t => t.classList.remove("activa"));
            tarjeta.classList.add("activa");

        });
    });
    const carrito = document.getElementById("carrito");
    carrito.addEventListener("click", () => {
        alert("Esta funcionalidad aún no está disponible");
    })

});

/*
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
*/

/*
function comprobarClave() {
    let clave1 = document.f1.contrasenia.value
    let clave2 = document.f1.repetir_contrasenia.value
    let email1 = document.f1.correo.value
    let email2 = document.f1.repetir_correo.value

    if (clave1 === clave2 && email1 === email2) {
        alert("Esta todo correcto")
        document.getElementById("newsletter").style.display = "none";
        return true;
    } else if (clave1 != clave2){
        alert("Las contraseñas deben de coincidir")
        return false;
    } else if (email1 != email2){
        alert("Los email deben de coincidir")
        return false;
    }
}
*/