import styled from 'styled-components';
import { FlexBox, colors, dimensions } from '../../styles';
import { Text, Title } from '../atoms';

type CardProps = {
   id?: number;
   imageUrl?: string;
   servings?: number;
   time?: number;
   title?: string;
};

const CardWrapperStyled = styled.a`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border-radius: ${dimensions.borderRadius.base};
   border: 1px solid ${colors.gray.gray1};
   color: ${colors.primary};
   height: 450px;
   padding: ${dimensions.spacing.base};
   text-decoration: none;
   transition: all 0.2s ease-in-out;
   width: 300px;

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
   }
`;

const CardImageStyled = styled.div<CardProps>`
   background-image: url(${({ imageUrl }) => imageUrl});
   background-size: cover;
   background-position: center;
   border-radius: ${dimensions.borderRadius.base};
   /* TODO -> Cambiar height según media query */
   height: 70%;
   width: 100%;
`;

const CardContentStyled = styled(FlexBox)`
   height: 30%;
   width: 100%;
`;

const Card = ({ imageUrl, servings, title, time, id }: CardProps) => {
   return (
      <CardWrapperStyled href="#">
         <CardImageStyled imageUrl={imageUrl} />
         <CardContentStyled justify="space-between">
            <Title as="h2" weight={500}>
               {title}
            </Title>
            <FlexBox direction="row" justify="space-between">
               <Text>{time} mins</Text>
               <Text>Servings: {servings}</Text>
            </FlexBox>
         </CardContentStyled>
      </CardWrapperStyled>
   );
};

export { Card };
