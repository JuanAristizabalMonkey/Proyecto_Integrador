# Rick and Morty - Proyecto Integrador

Aplicación web interactiva que permite explorar y buscar personajes de la serie animada "Rick and Morty". Desarrollada como proyecto integrador del Módulo 1 de JavaScript, la aplicación consume datos de la [API Rick and Morty](https://rickandmortyapi.com/) y los presenta en una interfaz moderna y responsive.

## Características

- Búsqueda de personajes por nombre
- Paginación para navegar entre páginas de resultados
- Modo oscuro persistente con almacenamiento local
- Diseño completamente responsive
- Interfaz moderna con tarjetas de información de personajes
- Guardado automático de preferencias de tema
- Accesibilidad mejorada con etiquetas ARIA

## Inicio rápido

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a Internet

### Instalación

Clonar el repositorio:
```bash
git clone https://github.com/JuanAristizabalMonkey/Proyecto_Integrador.git
cd Proyecto_Integrador
```

Abrir el proyecto en un servidor local:
```bash
# Con Python
python -m http.server 8000

# O con Node.js
npx http-server
```

Acceder en el navegador:
```
http://localhost:8000/Proyecto
```

## Estructura del proyecto

```
Proyecto_Integrador_JEAV/
│
├── README.md                 
│
└── Proyecto/
    ├── index.html           
    ├── index.js             
    ├── styles.css           
    └── .gitignore          
```

## Uso de la aplicación

### Buscar personajes
1. Ingresa el nombre de un personaje en el campo de búsqueda
2. Haz clic en "Buscar" o presiona Enter
3. Los resultados aparecerán en forma de tarjetas

### Cargar primeros personajes
Haz clic en "Cargar primeros" para ver los personajes de la primera página

### Navegación
Usa los botones "Anterior" y "Siguiente" para moverte entre páginas

### Cambiar tema
Haz clic en el toggle "Modo oscuro" en la esquina superior derecha para cambiar entre tema claro y oscuro

## Documentación de funciones

### inicializarTema()
Recupera el tema guardado en localStorage al cargar la página.

### modoOscuro()
Alterna entre modo claro y oscuro y guarda la preferencia.

```javascript
function modoOscuro(){
    document.body.classList.toggle("dark");
    
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("modoOscuro", "true");
    } else {
        localStorage.setItem("modoOscuro", "false");
    }
}
```

### buscarPersonajes(urlAPI)
Realiza solicitudes a la API de Rick and Morty.

Parámetros:
- urlAPI (string): URL con parámetros de búsqueda

Ejemplo:
```javascript
const url = urlAPI(urlBaseAPI, { name: "Rick" });
buscarPersonajes(url);
```

### mostrarPersoanjes(personajes)
Muestra los personajes en tarjetas con información detallada.

Parámetros:
- personajes (Array): Array de objetos de personajes

Información mostrada:
- Imagen del personaje
- Nombre
- Estado (Alive/Dead/Unknown) con color
- Especie
- Género
- Origen
- Ubicación

### colorEstado(estado)
Retorna el color correspondiente al estado del personaje.

Parámetros:
- estado (string): Estado del personaje

```javascript
colorEstado("Alive")    // retorna "green"
colorEstado("Dead")     // retorna "red"
colorEstado("unknown")  // retorna "orange"
```

### urlAPI(baseURL, parametros)
Construye una URL con parámetros de búsqueda.

Parámetros:
- baseURL (string): URL base de la API
- parametros (Object): Objeto con parámetros

Ejemplo:
```javascript
const url = urlAPI("https://rickandmortyapi.com/api/character", { 
    name: "Morty",
    page: 2 
});
```

### limpiarBusqueda()
Limpia el campo de búsqueda y lo enfoca.

### actualizarBotonesPagina()
Actualiza el estado de los botones de paginación y muestra la página actual.

### inicializar()
Función principal que se ejecuta al cargar la página e inicializa la aplicación.

## Eventos principales

| Evento | Elemento | Acción |
|--------|----------|--------|
| change | #themeToggle | Alterna el modo oscuro |
| submit | #searchForm | Busca personajes por nombre |
| click | #searchBtn | Busca personajes |
| click | #loadBtn | Carga la primera página |
| click | #nextBtn | Va a la siguiente página |
| click | #prevBtn | Va a la página anterior |

## Diseño y estilos

### Paleta de colores

Modo claro:
- Fondo: Blanco
- Texto: Negro
- Color primario: Rojo
- Color secundario: Azul

Modo oscuro:
- Fondo: Negro
- Texto: Blanco
- Color primario: Rojo
- Color secundario: Azul

### Grid responsive

- Móvil: 1 columna
- Tablet (640px+): 2 columnas
- Desktop (1024px+): 3 columnas
- Pantallas grandes (1280px+): 4 columnas

## API utilizada

Endpoint:
```
GET https://rickandmortyapi.com/api/character
```

Parámetros:
- name (string): Filtrar por nombre
- page (integer): Número de página

Ejemplo de respuesta:
```json
{
  "info": {
    "count": 826,
    "pages": 42
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)"
      },
      "location": {
        "name": "Citadel of Ricks"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    }
  ]
}
```

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- LocalStorage API
- Responsive Design

## Variables CSS personalizables

```css
:root {
    --color_primary: red;
    --color_secondary: blue;
    
    --spacing_sm: 0.5rem;
    --spacing_md: 1rem;
    --spacing_lg: 2rem;
    
    --font_size_sm: 1rem;
    --font_size_base: 1.5rem;
    
    --transition_medium: 0.6s ease;
    
    --border_radius_md: 8px;
}
```

## Solución de problemas

Los personajes no aparecen:
- Verifica tu conexión a Internet
- Abre la consola (F12) para ver errores
- Asegúrate de usar un servidor local

El tema no se guarda:
- Verifica que localStorage esté habilitado
- Intenta limpiar el caché del navegador

## Autor

Juan Aristizabal
GitHub: [@JuanAristizabalMonkey](https://github.com/JuanAristizabalMonkey)

## Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## Agradecimientos

[Rick and Morty API](https://rickandmortyapi.com/) por proporcionar los datos
[Adult Swim](https://www.adultswim.com/) por la serie original

---

Última actualización: Diciembre 4, 2025
