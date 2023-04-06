import styled from 'styled-components';
import { colors, dimensions, FlexBox } from '../../styles';
import { Button, Input } from '../atoms';

const SubHeaderStyled = styled(FlexBox)`
   background-color: ${colors.gray.gray2};
   padding: ${dimensions.spacing.xxs};
`;

function SubHeader() {
   // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   //    e.preventDefault();
   //    // console.log(e.target.value);
   // };

   return (
      <SubHeaderStyled data-testid="subheader">
         <FlexBox direction="row">
            <Input placeholder="Busca..." />
            <Button onClick={() => console.log('Botón clickeado!')}>Buscar</Button>
         </FlexBox>
      </SubHeaderStyled>
   );
}

export default styled(SubHeader)``;
