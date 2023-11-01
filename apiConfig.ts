const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

const apiConfig = {
  baseUrl,
  headers: {
    Accept: "application/json",
    Authorization: `key ${apiKey}`,
  },
};

export default apiConfig;
