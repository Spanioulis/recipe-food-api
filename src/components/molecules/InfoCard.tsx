import styled from 'styled-components';
import { FlexBox, colors, dimensions } from '../../styles';
import { Icon, Text, Title } from '../atoms';
import { Link } from 'react-router-dom';

type InfoCardProps = {
   aggregateLikes?: number;
   title?: string;
   image?: string;
   summary?: string;
   servings?: number;
   preparationMinutes?: number;
   cookingMinutes?: number;
   extendedIngredients?: {
      id?: number;
      aisle?: string;
      image?: string;
      consistency?: string;
      name?: string;
      original?: string;
      originalName?: string;
      amount?: number;
      unit?: string;
      meta?: string[];
      metaInformation?: string[];
      measures?: {
         us?: {
            amount?: number;
            unitShort?: string;
            unitLong?: string;
         };
         metric?: {
            amount?: number;
            unitShort?: string;
            unitLong?: string;
         };
      };
   }[];
   dishTypes?: string[];
   healthScore?: number;
   glutenFree?: boolean;
   vegan?: boolean;
   sourceUrl?: string;
};

const CardWrapper = styled(FlexBox)`
   border-radius: ${dimensions.borderRadius.base};
   box-shadow: ${colors.boxShadow.card};
   color: ${colors.gray.gray3};
   margin: 4rem;
   max-width: 90%;
   padding: ${dimensions.spacing.lg};
`;

const CardImage = styled.img`
   width: 400px;
   height: 400px;
   object-fit: cover;
   margin-right: 3rem;

   @media (max-width: 1024px) {
      margin-bottom: ${dimensions.spacing.xl};
      margin-right: ${dimensions.spacing.base};
   }
   @media (max-width: 600px) {
      width: 275px;
      height: 275px;
      margin-right: 0rem;
   }
`;

const CardTitle = styled(Title)`
   margin-bottom: ${dimensions.spacing.base};
`;

const ListWrapper = styled.ul`
   list-style: outside;
   margin-left: ${dimensions.spacing.xl};
`;

const ListItem = styled.li`
   line-height: 2;
   text-align: left;
`;

const FlexBoxStyled = styled(FlexBox)`
   border-bottom: 1px solid ${colors.gray.gray2};
   border-top: 1px solid ${colors.gray.gray2};
   margin-bottom: ${dimensions.spacing.base};
`;

const HeaderStyled = styled(FlexBox)`
   margin-bottom: ${dimensions.spacing.xs};
`;

const LinkStyled = styled(Link)`
   text-decoration: none;
   color: ${colors.primaryDark};
`;

const BackHomeStyled = styled(FlexBox)`
   cursor: pointer;
   padding: ${dimensions.spacing.xxs};

   &:hover {
      border-radius: ${dimensions.borderRadius.base};
      background-color: ${colors.gray.gray2};
      transition: all 0.2s ease-in-out;
   }
`;

const InfoCard = ({
   aggregateLikes,
   dishTypes,
   extendedIngredients,
   glutenFree,
   healthScore,
   image,
   sourceUrl,
   title,
   vegan
}: InfoCardProps) => {
   return (
      <CardWrapper direction="row" wrap="wrap" align="start">
         <CardImage src={image} alt={title} />
         <div style={{ flex: 1 }}>
            <HeaderStyled direction="row" justify="space-around">
               <FlexBox>
                  <Title as="h2" color={colors.gray.gray3} weight={600}>
                     {title}
                  </Title>
               </FlexBox>
               <BackHomeStyled style={{ flex: 1 }} direction="row" gap="0.2rem">
                  <LinkStyled to="/">Home</LinkStyled>
                  <Icon name="restaurant" opsz={48} wght={700} color={colors.primaryLight} />
               </BackHomeStyled>
            </HeaderStyled>

            <FlexBoxStyled direction="row" wrap="wrap" justify="space-evenly">
               {dishTypes?.map((dt) => (
                  <Text key={dt}>{dt}</Text>
               ))}
            </FlexBoxStyled>
            <FlexBox direction="row">
               <FlexBox align="start" style={{ flex: 2 }}>
                  {extendedIngredients && (
                     <>
                        <CardTitle as="h3">Ingredients</CardTitle>
                        <ListWrapper>
                           {extendedIngredients.map((ingredient) => (
                              <ListItem key={ingredient.original}>
                                 <Text size={dimensions.font.xs}>{ingredient.original}</Text>
                              </ListItem>
                           ))}
                        </ListWrapper>
                     </>
                  )}
               </FlexBox>
               <FlexBox gap={dimensions.spacing.xxs} style={{ flex: 1 }}>
                  {sourceUrl && (
                     <Title as="h3">
                        <a href={sourceUrl} target="_blank">
                           Go to URL
                        </a>
                     </Title>
                  )}
                  {aggregateLikes && (
                     <Title as="h3" weight={600} color={colors.gray.gray3}>
                        {aggregateLikes} like/s
                     </Title>
                  )}
                  {healthScore && (
                     <FlexBox direction="row" gap="1rem">
                        <Title
                           as="h3"
                           color={
                              healthScore < 50
                                 ? colors.primaryDark
                                 : healthScore < 90
                                 ? colors.goldenrod
                                 : colors.secondary
                           }
                           weight={600}
                        >
                           Health score:
                        </Title>
                        <Text>{healthScore}/100</Text>
                     </FlexBox>
                  )}
                  {vegan && (
                     <FlexBox direction="row" gap={dimensions.spacing.xxs}>
                        <Icon name="grass" color={colors.secondary} />
                        <Title as="h3" color={colors.secondary}>
                           Vegan
                        </Title>
                     </FlexBox>
                  )}

                  {glutenFree && (
                     <FlexBox direction="row" gap={dimensions.spacing.xxs}>
                        <Icon name="verified" color={colors.corn} opsz={24} />
                        <Title as="h3" color={colors.corn}>
                           Gluten free
                        </Title>
                     </FlexBox>
                  )}
               </FlexBox>
            </FlexBox>
         </div>
      </CardWrapper>
   );
};

export { InfoCard };
