import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useFetch } from '../utils';
import { FlexBox, dimensions } from '../styles';
import { ListCard, SearchBar } from '../components/molecules';

const LayoutCardStyled = styled(FlexBox)`
   margin: ${dimensions.spacing.xl} 0rem;
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

const RecipeList = () => {
   const [searchData, setSearchData] = useState('');
   const urls = {
      random: `https://api.spoonacular.com/recipes/random?number=10&apiKey=${import.meta.env.VITE_API_KEY}`,
      search: `https://api.spoonacular.com/recipes/search?query=${searchData}&number=10&apiKey=${
         import.meta.env.VITE_API_KEY
      }`
   };
   const [url, setUrl] = useState(urls.search);

   const { data } = useFetch<RecipeResult>(url);
   const [recipes, setRecipes] = useState<RecipeResult['results']>([]);
   const [random, setRandom] = useState<RecipeResult['recipes']>([]);
   const [key, setKey] = useState(0);

   useEffect(() => {
      if (url === urls.search && data?.results) {
         setRecipes(data.results);
         setRandom([]);
      } else if (url === urls.random && data?.recipes) {
         setRandom(data.recipes);
         setRecipes([]);
      }
   }, [data, url, key]);

   useEffect(() => {
      setUrl(
         `https://api.spoonacular.com/recipes/search?query=${searchData}&number=10&apiKey=${
            import.meta.env.VITE_API_KEY
         }`
      );
   }, [searchData]);

   const handleRandom = () => {
      setUrl(urls.random);
      setKey((prev) => prev + 1);
   };

   return (
      <>
         <SearchBar setSearchData={setSearchData} handleRandom={handleRandom} />
         <LayoutCardStyled>
            {recipes && recipes.length > 0 && (
               <FlexBox direction="row" wrap="wrap" gap={dimensions.spacing.xl}>
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
               <FlexBox direction="row" wrap="wrap" gap={dimensions.spacing.xs}>
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
