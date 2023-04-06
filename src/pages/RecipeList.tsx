import styled from 'styled-components';
import { useFetch } from '../utils';
import { FlexBox, dimensions } from '../styles';
import { useEffect, useState } from 'react';
import { ListCard } from '../components/molecules';

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
   recipes: {
      id?: number;
      image?: string;
      likes?: number;
      readyInMinutes?: number;
      servings?: number;
      sourceUrl?: string;
      title?: string;
   }[];
};

const ingredient = 'cheese';

const urls = {
   random: `https://api.spoonacular.com/recipes/random?number=5&apiKey=${import.meta.env.VITE_API_KEY}`,
   search: `https://api.spoonacular.com/recipes/search?query=${ingredient}&number=5&apiKey=${
      import.meta.env.VITE_API_KEY
   }`,
   ingredients: `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
      import.meta.env.VITE_API_KEY
   }&ingredients=apple&number=2`
};

const RecipeList = () => {
   const { data } = useFetch<RecipeResult>(urls.search);

   const [recipes, setRecipes] = useState<RecipeResult['results']>([]);
   const [random, setRandom] = useState<RecipeResult['recipes']>([]);

   useEffect(() => {
      if (data?.results) {
         setRecipes(data.results);
      } else if (data?.recipes) {
         setRandom(data.recipes);
      }
   }, [data]);

   // TODO -> Crear un useEffect para la URL que se pase, ya que según cómo se imprimirá un tipo de tarjeta u otra (ver qué necesidades hay)

   return (
      <LayoutCardStyled>
         {recipes && recipes.length > 0 && (
            <FlexBox direction="row" gap={dimensions.spacing.xs}>
               {recipes?.map((d) => (
                  <ListCard
                     key={d.id}
                     id={d.id}
                     imageUrl={`https://spoonacular.com/recipeImages/${d.image}`}
                     title={d.title}
                     time={d.readyInMinutes}
                     servings={d.servings}
                  />
               ))}
            </FlexBox>
         )}
         {random && random.length > 0 && (
            <FlexBox direction="row" gap={dimensions.spacing.xs}>
               {random?.map((d) => (
                  <ListCard
                     key={d.id}
                     id={d.id}
                     imageUrl={d.image}
                     title={d.title}
                     time={d.readyInMinutes}
                     servings={d.servings}
                  />
               ))}
            </FlexBox>
         )}
      </LayoutCardStyled>
   );
};

export { RecipeList };
