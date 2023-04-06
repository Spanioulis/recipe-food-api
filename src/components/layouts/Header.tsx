import styled from 'styled-components';
import { colors, dimensions, FlexBox } from '../../styles';
import { Title } from '../atoms';
// import { MainMenu } from '../molecules';

const HeaderStyled = styled(FlexBox)`
   background-color: ${colors.primary};
   padding-top: ${dimensions.spacing.lg};
   padding-bottom: ${dimensions.spacing.lg};
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
