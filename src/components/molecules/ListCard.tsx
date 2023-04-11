import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FlexBox, colors, dimensions } from '../../styles';
import { Icon, Text, Title } from '../atoms';

type CardProps = {
   id?: number;
   imageUrl?: string;
   time?: number;
   title?: string;
   servings?: number;
};

const CardWrapperStyled = styled.a`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border-radius: ${dimensions.borderRadius.base};
   border: -5px solid ${colors.gray.gray1};
   box-shadow: ${colors.boxShadow.card};
   color: ${colors.primary};
   cursor: pointer;
   height: 400px;
   padding: ${dimensions.spacing.base};
   text-decoration: none;
   transition: all 0.2s ease-in-out;
   width: 280px;

   &:hover {
      transform: translateY(-5px);
      box-shadow: ${colors.boxShadow.hover};
   }
`;

const CardImageStyled = styled.div<CardProps>`
   background-image: url(${({ imageUrl }) => imageUrl});
   background-size: auto;
   background-position: center;
   border-radius: ${dimensions.borderRadius.base};
   height: 60%;
   width: 100%;
`;

const TitleStyled = styled(Title)`
   margin-left: 0.2rem;
   min-height: 18%;
   max-height: calc(1.5em * 2);
   overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   text-overflow: ellipsis;
`;

const ListCard = ({ imageUrl, servings, title, time, id }: CardProps) => {
   const navigate = useNavigate();

   const handleDetail = () => {
      navigate(`/info/${id}`);
   };

   return (
      <CardWrapperStyled onClick={handleDetail}>
         <TitleStyled as="h2" weight={500} color={colors.gray.gray3}>
            {title}
         </TitleStyled>
         <CardImageStyled imageUrl={imageUrl} />
         <FlexBox direction="row" justify="flex-start" gap={dimensions.spacing.base}>
            <FlexBox direction="row" justify="flex-start">
               <Icon name="timer" />
               <Text size={dimensions.font.xs}>{time} mins</Text>
            </FlexBox>
            <FlexBox>
               <Text size={dimensions.font.xxs}>Servings: {servings}</Text>
            </FlexBox>
         </FlexBox>
      </CardWrapperStyled>
   );
};

export { ListCard };
