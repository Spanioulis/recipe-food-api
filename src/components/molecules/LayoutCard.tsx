import styled from 'styled-components';
import { useFetch } from '../../utils';
import { FlexBox, dimensions } from '../../styles';
import { Title } from '../atoms';
import { useEffect, useState } from 'react';
import { Card } from './Card';

const LayoutCardStyled = styled(FlexBox)`
   margin-top: ${dimensions.spacing.base};
`;

type RecipeResult = {
   results: {
      id?: number;
      image?: string;
      readyInMinutes?: number;
      servings?: number;
      sourceUrl?: string;
      title?: string;
   }[];
};

const ingredient = 'meat';
const URL = `https://api.spoonacular.com/recipes/search?query=${ingredient}&number=5&apiKey=${
   import.meta.env.VITE_API_KEY
}`;

export const LayoutCard = () => {
   const { data } = useFetch(URL);

   const [recipes, setRecipes] = useState<RecipeResult['results']>([]);
   console.log('recipes:', recipes);

   useEffect(() => {
      if (data?.results) {
         setRecipes(data.results);
      }
   }, [data]);

   return (
      <LayoutCardStyled>
         {' '}
         <Title as="h1">Recetas</Title>
         <FlexBox direction="row">
            {recipes?.map((d) => (
               <Card
                  id={d.id}
                  imageUrl={`https://spoonacular.com/recipeImages/${d.image}`}
                  title={d.title}
                  time={d.readyInMinutes}
                  servings={d.servings}
               />
            ))}
         </FlexBox>
      </LayoutCardStyled>
   );
};
