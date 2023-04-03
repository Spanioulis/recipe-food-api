import { useEffect, useState } from 'react';

type Recipe = {
   id: number;
   image: string;
   readyInMinutes: number;
   servings: number;
   sourceUrl: string;
   title: string;
};

interface RecipeData {
   results: Recipe[];
}

export const useFetch = (url: string) => {
   const [data, setData] = useState<RecipeData>({ results: [] });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      setLoading(true);
      setError(null);
      fetch(url)
         .then((response) => response.json())
         .then((d) => {
            console.log('d:', d);
            setData(d);
            setLoading(false);
         })
         .catch((err) => {
            setError(err);
            setLoading(false);
         });
   }, [url]);

   return { data, error, loading };
};
