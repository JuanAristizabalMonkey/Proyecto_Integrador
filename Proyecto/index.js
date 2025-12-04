

/* Configuracion principal del proyecto */

const urlBaseAPI = "https://rickandmortyapi.com/api/character";

/* Selectores de busqueda */

const contenedorResultados = document.querySelector("#results");
const inputBusqueda = document.querySelector("#searchInput");
const botonBusqueda = document.querySelector("#searchBtn");
const cargarPrimeros = document.querySelector("#loadBtn");
const textoEstado = document.querySelector("#status");


/* Selectores de paginacion */

const botonAnterior = document.querySelector("#prevBtn");
const botonSiguiente = document.querySelector("#nextBtn");
const numeroPagina = document.querySelector("#pageInfo");
const busqueda = document.querySelector("#searchForm");

/* Selector de modo oscuro */

const toggleModoOscuro = document.querySelector("#darkModeBtn");

/* Variables para la paginacion */

let numeroPaginaActual = 1;
let totalPaginas = 1;


/* Creacion de funciones principales*/
 
/* Uso del local storage para el modo oscuro */
function inicializarTema(){
    const modoOscuroGuardado = localStorage.getItem("modoOscuro");

    if (modoOscuroGuardado === "true") {
        document.body.classList.add("dark-mode");
        toggleModoOscuro.checked = true;
    }

}
function modoOscuro(){
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("modoOscuro", "true");
    } else {
        localStorage.setItem("modoOscuro", "false");
    }

}

/* Uso de la API */
async function buscarPersonajes(urlAPI){
    try {
        textoEstado.textContent = "Cargando...";
        textoEstado.computedStyleMap.display = "block";

        const respuesta = await fetch(urlAPI);

        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud" ${respuesta.status}`);
        }
    const datosJSON = await respuesta.json();

    totalPaginas = datosJSON.info.pages;

    actualizarBotonesPagina();

    mostrarPersoanjes(datosJSON.results);

    textoEstado.textContent = "Listo";
} catch (error) {
    console.error("Error al obtener los personajes:", error);
    textoEstado.textContent = "Error al cargar los personajes.";
    textoEstado.style.display = "block";
}
}

 /* USO DEL DOM PARA MOSTRAR LOS RESULTADOS */
/**
 * @param {Array} personajes
 */
function mostrarPersoanjes(personajes){
    contenedorResultados.innerHTML = "";

    if (personajes.length === 0) {
        contenedorResultados.innerHTML = "<p>No se encontraron personajes.</p>";
        return;
    }
    personajes.forEach(function(personaje){
        const tarjetaPersonaje = document.createElement("div");
        tarjetaPersonaje.classList.add("character-card");
        tarjetaPersonaje.setAttribute("role", "article");

        const colorEstado = colorEstado(personaje.status);

        /* Contenido de la tarjeta */
        tarjetaPersonaje.innerHTML = `
        <img 
        src="${personaje.image}" 
        alt="Imagen de ${personaje.name}"
        loading="lazy"
      >
      <div class="card-content">
        <h3>${personaje.name}</h3>
        <p>
          <strong>Estado:</strong> 
          <span style="color: ${colorEstado}; font-weight: bold;">
            ${personaje.status}
          </span>
        </p>
        <p><strong>Especie:</strong> ${personaje.species}</p>
        <p><strong>Género:</strong> ${personaje.gender}</p>
        <p><strong>Origen:</strong> ${personaje.origin.name}</p>
        <p><strong>Ubicación:</strong> ${personaje.location.name}</p>
      </div>
    `;

        contenedorResultados.appendChild(tarjetaPersonaje);
    });
}

/* Actualiza el estado de los botones segun la pagina */

function actualizarBotonesPagina(){
    botonAnterior.disabled = numeroPaginaActual === 1;
    botonSiguiente.disabled = numeroPaginaActual === totalPaginas;
    numeroPagina.textContent = `Página ${numeroPaginaActual} de ${totalPaginas}`;
 }

/**
 * @param {string} estado
 * @return {string}
 */
function colorEstado(estado){
    const colores = {
        "Alive": "green",
        "Dead": "red",
        "unknown": "orange"
    };

    return colores[estado] || "grey";
 }

 function urlAPI (){

 }
 function limpiarBusqueda(){

 }
function inicializar(){

}