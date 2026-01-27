document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btn-subir");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            boton.style.display = "flex";
        } else {
            boton.style.display = "none";
        }
    });

    boton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});