import styled from 'styled-components';
import { FlexBox, colors, dimensions } from '../../styles';
import { Icon, Text, Title } from '../atoms';

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
   padding: 24px;
   border-radius: 8px;
   box-shadow: ${colors.boxShadow.card};
   max-width: 90%;
   margin: 24px;
   color: ${colors.gray.gray3};
`;

const CardImage = styled.img`
   width: 400px;
   height: 400px;
   object-fit: cover;
   margin-right: 3rem;
`;

const CardTitle = styled(Title)`
   margin-bottom: ${dimensions.spacing.base};
`;

const ListWrapper = styled.ul`
   list-style: outside;
   margin-left: 2rem;
`;

const ListItem = styled.li`
   line-height: 1.5;
   margin-bottom: 8p;
   text-align: left;
`;

const FlexBoxStyled = styled(FlexBox)`
   border-bottom: 1px solid ${colors.gray.gray2};
   border-top: 1px solid ${colors.gray.gray2};
   margin-bottom: ${dimensions.spacing.base};
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
      <CardWrapper direction="row" align="start">
         <CardImage src={image} alt={title} />
         <div style={{ flex: 1 }}>
            <CardTitle as="h2" color={colors.gray.gray3} weight={600}>
               {title}
            </CardTitle>
            <FlexBoxStyled direction="row" justify="space-evenly">
               {dishTypes?.map((dt) => (
                  <Text>{dt}</Text>
               ))}
            </FlexBoxStyled>
            <FlexBox direction="row">
               <FlexBox align="start">
                  {extendedIngredients && (
                     <>
                        <CardTitle as="h3">Ingredients</CardTitle>
                        <ListWrapper>
                           {extendedIngredients.map((ingredient) => (
                              <ListItem key={ingredient.id}>
                                 <Text size={dimensions.font.xs}>
                                    {ingredient.name} ({ingredient.amount} {ingredient.unit})
                                 </Text>
                              </ListItem>
                           ))}
                        </ListWrapper>
                     </>
                  )}
               </FlexBox>
               <FlexBox gap={dimensions.spacing.xxs}>
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
                        <Title as="h3">Health score:</Title>
                        <Text>{healthScore}/100</Text>
                     </FlexBox>
                  )}
                  {vegan && (
                     <FlexBox direction="row" gap={dimensions.spacing.xxs}>
                        <Icon name="verified" color={colors.secondary} />
                        <Title as="h3" color={colors.secondary}>
                           vegan
                        </Title>
                     </FlexBox>
                  )}

                  {glutenFree && (
                     <FlexBox direction="row" gap={dimensions.spacing.xxs}>
                        <Icon name="block" color={colors.gray.gray3} opsz={24} />
                        <Title as="h3" color={colors.gray.gray3}>
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
