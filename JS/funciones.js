
//menu movil
//variables
const menu = document.querySelector('#movil');
const degradado = document.querySelector('#degradado');
const btnMenu = document.querySelector('#btnmenu');
const btnSalir = document.querySelector("#salir");
const enlaces = document.querySelectorAll(".link");

//Eventos

btnMenu.addEventListener("click", mostrarMenu);
btnSalir.addEventListener("click", ocultarMenu);
document.addEventListener("keydown", filtroTecla);
degradado.addEventListener("click", ocultarMenu);
enlaces.forEach(enlace => {
    enlace.addEventListener("click", ocultarMenu);
});

//Funciones

function filtroTecla(e) {
    e.KeyCode === 27 && ocultarMenu();
}

function mostrarMenu() {
    menu.style.left = "0";
    degradado.style.display = "block";
    setTimeout(() => {
        degradado.style.background = "rgba(0, 0, 0, .75)";
    }, 10);
}

function ocultarMenu() {
    menu.style.left = "-80%";
    degradado.style.background = "rgba(0, 0, 0, 0)";
    setTimeout(() => {
        degradado.style.display = "none";
    }, 250);
}

//lista de arquetipos

const titulos = document.querySelectorAll(".nombre");

titulos.forEach(titulo => {
    titulo.addEventListener("click", event => {
        titulo.classList.toggle("active");
        const cuerpo = titulo.nextElementSibling;
        if (titulo.classList.contains("active")) {
            cuerpo.style.maxHeight = cuerpo.scrollHeight + "px";
        }
        else {
            cuerpo.style.maxHeight = 0;
        }

    });
});


//galeria
//variables
const imagenes = document.querySelectorAll(".imagen");
const lightbox = document.querySelector("#lightbox");
const btnExit = document.querySelector("#exit");
const boxImage = document.querySelector("#boxImage");
const imagenlightbox = document.querySelector("#imagenlightbox");
const nombreImagen = document.querySelector("#nombre");

//eventos
imagenes.forEach(imagen => {
    imagen.addEventListener("click", seleccionado);
})

btnExit.addEventListener("click", ocultarLightbox);
document.addEventListener("click", filtrarElemento);

//funciones
function seleccionado(e) {
    const imagen = e.target.children[0];
    const src = imagen.getAttribute('src');
    const nombre = imagen.getAttribute('nombre');
    mostrarlightbox(src, nombre);
}

function filtrarElemento(e) {
    e.target.id === "lightbox" && ocultarLightbox();
}
function mostrarlightbox(src, nombre) {
    lightbox.style.display = "flex";
    setTimeout(() => {
        lightbox.style.opacity = "1";
    }, 10);

    setTimeout(() => {
        boxImage.style.opacity = "1";
        boxImage.style.transform = "translatex(0)";
    }, 450)

    imagenlightbox.setAttribute("src", src);
    nombreImagen.textContent = `${nombre}`;
}

function ocultarLightbox() {
    boxImage.style.opacity = "0";

    setTimeout(() => {
        lightbox.style.opacity = "0";
    }, 250);

    setTimeout(() => {
        lightbox.style.display = "none"
    }, 500);
}