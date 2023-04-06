import { useParams } from 'react-router-dom';
import { useFetch } from '../utils';
import { InfoCard } from '../components/molecules';
import { useEffect, useState } from 'react';

type RecipeResult = {
   aggregateLikes?: number;
   analyzedInstructions?: any[];
   cheap?: boolean;
   cookingMinutes?: number;
   creditsText?: string;
   cuisines?: string[];
   dairyFree?: boolean;
   diets?: string[];
   dishTypes?: string[];
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
   gaps?: string;
   glutenFree?: boolean;
   healthScore?: number;
   id?: number;
   image?: string;
   imageType?: string;
   instructions?: string;
   license?: string;
   lowFodmap?: boolean;
   occasions?: any[];
   originalId?: any;
   preparationMinutes?: number;
   pricePerServing?: number;
   readyInMinutes?: number;
   servings?: number;
   sourceName?: string;
   sourceUrl?: string;
   spoonacularSourceUrl?: string;
   summary?: string;
   sustainable?: boolean;
   title?: string;
   vegan?: boolean;
   vegetarian?: boolean;
   veryHealthy?: boolean;
   veryPopular?: boolean;
   weightWatcherSmartPoints?: number;
   winePairing?: {
      pairedWines?: any[];
      pairingText?: string;
      productMatches?: any[];
   };
};

const RecipeInfo = () => {
   const { id } = useParams();
   const URL_INFO = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${
      import.meta.env.VITE_API_KEY
   }`;
   const { data } = useFetch<RecipeResult>(URL_INFO);
   const [infoRecipeData, setInfoRecipeData] = useState<RecipeResult | null>(null);

   useEffect(() => {
      if (data) {
         setInfoRecipeData(data);
      }
   }, [data]);

   return (
      <InfoCard
         aggregateLikes={infoRecipeData?.aggregateLikes}
         dishTypes={infoRecipeData?.dishTypes}
         extendedIngredients={infoRecipeData?.extendedIngredients}
         glutenFree={infoRecipeData?.glutenFree}
         healthScore={infoRecipeData?.healthScore}
         image={infoRecipeData?.image}
         sourceUrl={infoRecipeData?.sourceUrl}
         summary={infoRecipeData?.summary}
         title={infoRecipeData?.title}
         vegan={infoRecipeData?.vegan}
      />
   );
};

export { RecipeInfo };
