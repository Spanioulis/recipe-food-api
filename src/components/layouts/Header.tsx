import styled from 'styled-components';
import { colors, dimensions, FlexBox } from '../../styles';
import { Title } from '../atoms';

const HeaderStyled = styled(FlexBox)`
   background-color: ${colors.primary};
   padding: ${dimensions.spacing.lg};
`;

const Header = () => {
   return (
      <HeaderStyled data-testid="header">
         <Title as="h1" color={colors.white} weight={700}>
            Spoonacular - Recipe&Food 🥗🍤🍍🥑🍄
         </Title>
      </HeaderStyled>
   );
};

export { Header };
