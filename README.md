# Spoonacular - Recipe & Food 🥗🍤🍍🥑🍄

El objetivo de este proyecto es desarrollar una aplicación que permita mostrar recetas utilizando la API de Spoonacular. Al ingresar a la página inicial, se visualizan 10 recetas predeterminadas. Si el usuario desea explorar otras opciones, puede hacer clic en el botón "Random recipe" para cargar 10 recetas nuevas de forma aleatoria. Asimismo, se ha incluido un campo de búsqueda que permite buscar recetas por concepto y/o alimento. Para realizar la búsqueda, basta con ingresar el término deseado y presionar el botón "Buscar". Todo ello mediante solicitudes realizadas a la API de Spoonacular.

Cabe destacar que, al hacer clic en cualquier receta, se redirige al usuario a otra ruta donde se puede encontrar información detallada de cada receta, como su fotografía, nombre, tipo de plato, listado de ingredientes, URL de la receta original, likes, *health score* y si es apta para veganos (*Vegan*) y/o para personas con intolerancia al gluten (*Gluten free*). Además, en esta ruta se encuentra el botón "Home", que permite al usuario regresar a la pantalla inicial.

## Demo

🍌 [Click aquí](https://recipe-food-spoonacular.netlify.app/)

## Descripción

Proyecto realizado con React & Typescript y maquetado con styled-components. Se ha usado Vite por su rapidez de compilación. Enfocado en la versión de escritorio y sin utilizar bibliotecas externas para crear la aplicación; utilizando *Atomic Design* (atoms, molecules y organisms) para los componentes, carpeta *page* para las dos rutas ('/' y '/info/:id'), carpeta *styles* (estilos de la app), carpeta *utils* (custom hook *useFetch*), y carpeta *tests* para los tests (React Testing Library & Jest & Vitest) aplicados a los componentes para verificar que el comportamiento de los componentes sea el correcto, y para mejorar la calidad y reducir los errores en producción.

![spoonacular-api](https://user-images.githubusercontent.com/97700906/231271525-03322d38-aa76-44d6-8efb-eeb90e147aa4.gif)
![Home](https://user-images.githubusercontent.com/97700906/231268644-a77d1cbb-6e5d-4bd1-9279-264001e1c354.png)
![Info Recipe](https://user-images.githubusercontent.com/97700906/231268740-ed8e8ac8-933a-4c71-882c-aceea1bc17fc.png)


## Instalación


1. Clona el repositorio en tu equipo: git clone https://github.com/Spanioulis/recipe-food-api.git
2. Instala las dependencias: `npm install`
3. Crea un archivo *.env* en la raíz del proyecto y agrega tu clave de acceso de [Spoonacular API](https://spoonacular.com/food-api): `VITE_API_KEY=tu_clave_de_acceso`
4. Inicia el servidor de desarrollo: `npm run dev`
5. Abre http://localhost:5174 en tu navegador para ver la aplicación en acción

## Calidad de código

![codefactor-spoonacular](https://user-images.githubusercontent.com/97700906/232511961-d5dd052b-b38a-444b-bd13-b873219f5bab.PNG)
