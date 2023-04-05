import styled from 'styled-components';
import { colors, dimensions, FlexBox } from '../../styles';
import { Button, Input } from '../atoms';

const SubHeaderStyled = styled(FlexBox)`
   background-color: ${colors.secondaryLight};
   border-bottom: 1px solid ${colors.secondaryDark};
   border-top: 1px solid ${colors.secondaryDark};
   padding: ${dimensions.spacing.base};
`;

function SubHeader() {
   // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   //    e.preventDefault();
   //    // console.log(e.target.value);
   // };

   return (
      <SubHeaderStyled>
         <FlexBox direction="row">
            <Input placeholder="Busca..." />
            <Button onClick={() => console.log('Botón clickeado!')}>Buscar</Button>
         </FlexBox>
      </SubHeaderStyled>
   );
}

export default styled(SubHeader)``;
