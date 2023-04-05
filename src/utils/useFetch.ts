import { useEffect, useState } from 'react';

const useFetch = <T>(url: string) => {
   const [data, setData] = useState<T>();
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      setLoading(true);
      setError(null);
      fetch(url)
         .then((response) => response.json())
         .then((d: T) => {
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

export { useFetch };
