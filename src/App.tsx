import { Body } from './components/layouts';
import { LayoutCard } from './components/molecules';
import { GlobalStyle } from './styles';

function App() {
   return (
      <>
         <GlobalStyle />
         <Body>
            <LayoutCard />
         </Body>
      </>
   );
}

export default App;
