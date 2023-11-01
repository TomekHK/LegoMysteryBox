const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = "https://rebrickable.com/api/v3/";

const apiConfig = {
  baseUrl,
  headers: {
    Accept: "application/json",
    Authorization: `key ${apiKey}`,
  },
};

export default apiConfig;
