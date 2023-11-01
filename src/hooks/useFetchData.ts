import { useState, useEffect } from "react";
import apiConfig from "../../apiConfig";

const useFetchData = () => {
  const [data, setData] = useState<IMinifigsData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${apiConfig.baseUrl}/lego/minifigs/?search=harry%20potter`;
        const headers = apiConfig.headers;

        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
        setData(null);
      }
    };

    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default useFetchData;
