import { GlobalStyle } from './styles';
import { useFetch } from './utils/useFetch';

const ingredient = 'fish';

function App() {
   const URL = `https://api.spoonacular.com/recipes/search?query=${ingredient}&number=20&apiKey=${
      import.meta.env.VITE_API_KEY
   }`;
   // const { data } = useFetch(URL);
   // console.log('data:', data);
   return (
      <>
         <GlobalStyle />
         <div className="App">
            <h1>Spoonacular - Recipe&Food 🥗🍤🍍🥑🍄</h1>
         </div>
      </>
   );
}

export default App;
