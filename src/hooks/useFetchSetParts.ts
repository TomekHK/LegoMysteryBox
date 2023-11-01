import { useState, useEffect } from "react";
import apiConfig from "../../apiConfig";

const useFetchSetParts = (setNumber?: string) => {
  const [data, setData] = useState<IMinifigPart[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (setNumber) {
      const fetchData = async () => {
        try {
          const url = `${apiConfig.baseUrl}/lego/minifigs/${setNumber}/parts/`;
          const headers = apiConfig.headers;

          const response = await fetch(url, {
            method: "GET",
            headers: headers,
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const jsonData: IMinifigPartsData = await response.json();
          setData(jsonData.results);
          setIsLoading(false);
        } catch (error) {
          setError(error as Error);
          setIsLoading(false);
          setData(null);
        }
      };

      fetchData();
    }
  }, [setNumber]);

  return { data, error, isLoading };
};

export default useFetchSetParts;
