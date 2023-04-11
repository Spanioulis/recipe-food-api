# Spoonacular - Recipe & Food 🥗🍤🍍🥑🍄

La finalidad de este proyecto es crear una aplicación que muestre recetas utilizando la API de Spoonacular. Hay una pantalla incial que muestra 10 recetas predeterminadas. Al hacer clic en el botón "Random recipe", se cargarán 10 recetas aleatorias. También hay un campo de entrada de texto, para poder realizar una búsqueda por concepto y/o alimento, haciendo clic posteriormente al botón "Search". Todo ello mediante solicitudes a la API.

Al clicar en cualquier receta, se redirige a otra ruta donde encuentras la información completa de cada receta (fotografía, nombre, tipo del plato, listado de ingredientes, URL receta original, etc.), y un botón "Hom" que al hacer clic te retorna a la pantalla inicial. 

## Demo

🍌 [Click aquí](https://recipe-food-spoonacular.netlify.app/)

## Descripción

Proyecto realizado con React (Typescript) y maquetado con styled-components. Enfocado en la versión de escritorio y sin utilizar bibliotecas externas para crear la aplicación, utilizando [Atomic Desgin](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97) (atoms, molecules y organisms), y aplicando tests (React Testing Library & Jest & Vitest) a los componentes para verificar que el comportamiento de los componentes sea el correcto.

![screenshot]()
![animación]()

## Instalación

1. Clona el repositorio en tu equipo: git clone https://github.com/Spanioulis/recipe-food-api.git
2. Instala las dependencias: `npm install`
3. Crea un archivo .env.local en la raíz del proyecto y agrega tu clave de acceso de [Spoonacular API](https://spoonacular.com/food-api): VITE_API_KEY=tu_clave_de_acceso
4. Inicia el servidor de desarrollo: `npm run dev`
5. Abre http://localhost:5174 en tu navegador para ver la aplicación en acción

## Calidad de código

![Calidad de código]()
