document.addEventListener("DOMContentLoaded", () => {

    const noticias = document.querySelectorAll(".noticia");
    const tarjetas = document.querySelectorAll(".noti");

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

});
