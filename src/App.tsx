import { Text, Title } from './components/atoms';
import { FlexBox, GlobalStyle } from './styles';
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
         <FlexBox>
            <div className="App">
               <Title as="h1">Spoonacular - Recipe&Food 🥗🍤🍍🥑🍄</Title>
               <Text weight="bold">Probando Text...</Text>
            </div>
         </FlexBox>
      </>
   );
}

export default App;
