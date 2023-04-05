import { Title } from './components/atoms';
import { Body } from './components/layouts';
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
         <Body>
            <Title as="h1">BODY</Title>
         </Body>
      </>
   );
}

export default App;
