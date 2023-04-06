import { Body } from './components/layouts';
import { RecipeList } from './components/organisms';
import { GlobalStyle } from './styles';

function App() {
   return (
      <>
         <GlobalStyle />
         <Body>
            <RecipeList />
         </Body>
      </>
   );
}

export default App;
