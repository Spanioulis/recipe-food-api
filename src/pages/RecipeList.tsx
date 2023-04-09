import styled from 'styled-components';
import { useFetch } from '../utils';
import { FlexBox, dimensions } from '../styles';
import { useEffect, useState } from 'react';
import { ListCard, SearchBar } from '../components/molecules';

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

// TODO -> Crear constante con 'urls'

const RecipeList = () => {
   const [searchData, setSearchData] = useState('');
   console.log('searchData:', searchData);
   const urls = {
      random: `https://api.spoonacular.com/recipes/random?number=5&apiKey=${import.meta.env.VITE_API_KEY}`,
      search: `https://api.spoonacular.com/recipes/search?query=${searchData}&number=5&apiKey=${
         import.meta.env.VITE_API_KEY
      }`,
      ingredients: `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
         import.meta.env.VITE_API_KEY
      }&ingredients=apple&number=2`
   };

   // TODO -> Crear un useEffect para la URL que se pase, ya que según cómo se imprimirá un tipo de tarjeta u otra (ver qué necesidades hay) -> ¿Crear un useState ('urls')?

   const { data } = useFetch<RecipeResult>(urls.random);

   const [recipes, setRecipes] = useState<RecipeResult['results']>([]);
   const [random, setRandom] = useState<RecipeResult['recipes']>([]);

   useEffect(() => {
      if (data?.results) {
         setRecipes(data.results);
      } else if (data?.recipes) {
         setRandom(data.recipes);
      }
   }, [data]);

   return (
      <>
         <SearchBar setSearchData={setSearchData} />
         <LayoutCardStyled>
            {recipes && recipes.length > 0 && (
               <FlexBox direction="row" wrap="wrap" gap={dimensions.spacing.xs}>
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
      </>
   );
};

export { RecipeList };
