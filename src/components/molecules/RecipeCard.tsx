import styled from 'styled-components';
import { FlexBox, colors, dimensions } from '../../styles';
import { Icon, Text, Title } from '../atoms';

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
   border: -5px solid ${colors.gray.gray1};
   color: ${colors.primary};
   height: 400px;
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
   background-size: auto;
   background-position: center;
   border-radius: ${dimensions.borderRadius.base};
   /* TODO -> Cambiar height según media query */
   height: 70%;
   width: 100%;
`;

const CardContentStyled = styled(FlexBox)`
   height: 28%;
   width: 100%;
`;

const TitleStyled = styled(Title)`
   margin-left: 0.2rem;
   max-height: calc(1.5em * 2);
   overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   text-overflow: ellipsis;
`;

const RecipeCard = ({ imageUrl, servings, title, time, id }: CardProps) => {
   return (
      <CardWrapperStyled href="#">
         <CardImageStyled imageUrl={imageUrl} />
         <CardContentStyled justify="space-between" align="start" gap={dimensions.spacing.base}>
            <TitleStyled as="h2" weight={500}>
               {title}
            </TitleStyled>
            <FlexBox direction="row" justify="flex-start" gap={dimensions.spacing.base}>
               <FlexBox direction="row" justify="flex-start">
                  <Icon name="timer" />
                  <Text size={dimensions.font.xs}>{time} mins</Text>
               </FlexBox>
               <FlexBox>
                  <Text size={dimensions.font.xss}>Servings: {servings}</Text>
               </FlexBox>
            </FlexBox>
         </CardContentStyled>
      </CardWrapperStyled>
   );
};

export { RecipeCard };
