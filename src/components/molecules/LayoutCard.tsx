import styled from 'styled-components';
import { useFetch } from '../../utils';
import { FlexBox, dimensions } from '../../styles';
import { Text, Title } from '../atoms';
import { useEffect, useState } from 'react';

const LayoutCardStyled = styled(FlexBox)`
   margin-top: ${dimensions.spacing.lg};
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

const ingredient = 'rice';
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
         <FlexBox>
            {recipes?.map((d: RecipeResult['results'][number]) => (
               <div key={d.id}>
                  <img src={`https://spoonacular.com/recipeImages/${d.image}`} alt={d.title} width="200" />
                  <Title as="h3">{d.title}</Title>
                  <Text>{d.id}</Text>
               </div>
            ))}
         </FlexBox>
      </LayoutCardStyled>
   );
};
