import { useState, useEffect } from "react";
import apiConfig from "../../apiConfig";

const useFetchFigures = () => {
  const [data, setData] = useState<IMinifig[] | null>(null);
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

        if (response.status === 401) {
          alert("Authorization error, check if you ApiKey is valid.");
          throw new Error("unauthorized");
        }

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData: IMinifigsData = await response.json();
        setData(jsonData.results);
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

export default useFetchFigures;
