import React, { useEffect, useState } from 'react';
import { isArray } from 'lodash';
const useApiData = (url: string) => {
  //Make API call to a url

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {

    const makeApiCall = async () => {
      try {
        const data = await fetch(url, {
          method: 'GET',
        });
  
        let retval = await data.json();
        if (!isArray(retval)) {
          retval = [retval];
        }
        setData(retval);
      } catch (e) {
        console.log('Error in API call:', e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    makeApiCall();


  }, [url]);

  return { isLoading, isError, data };

};

export { useApiData };
