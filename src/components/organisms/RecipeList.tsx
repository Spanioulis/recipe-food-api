import styled from 'styled-components';
import { useFetch } from '../../utils';
import { FlexBox, dimensions } from '../../styles';
import { useEffect, useState } from 'react';
import { RecipeCard } from '../molecules';

const LayoutCardStyled = styled(FlexBox)`
   margin-top: ${dimensions.spacing.lg};
`;

type RecipeResult = {
   results: {
      id?: number;
      image?: string;
      likes?: number;
      readyInMinutes?: number;
      servings?: number;
      sourceUrl?: string;
      title?: string;
   }[];
};

const ingredient = 'pork';
// TODO -> Crear una constante 'urls'
const URL = `https://api.spoonacular.com/recipes/search?query=${ingredient}&number=5&apiKey=${
   import.meta.env.VITE_API_KEY
}`;
const URL_INGREDIENTS = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
   import.meta.env.VITE_API_KEY
}&ingredients=apple&number=2`;

const RecipeList = () => {
   const { data } = useFetch<RecipeResult>(URL);

   const [recipes, setRecipes] = useState<RecipeResult['results']>([]);

   useEffect(() => {
      if (data?.results) {
         setRecipes(data.results);
      }
   }, [data]);

   // TODO -> Crear un useEffect para la URL que se pase, ya que según cómo se imprimirá un tipo de tarjeta u otra (ver qué necesidades hay)

   return (
      <LayoutCardStyled>
         <FlexBox direction="row">
            {recipes?.map((d) => (
               <RecipeCard
                  key={d.id}
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

export { RecipeList };
