const apiKey = "mocked-api-key"
const baseUrl = "https://rebrickable.com/api/v3/";
const fakePostApiUrl = "https://jsonplaceholder.typicode.com/posts";

const apiConfig = {
  fakePostApiUrl,
  baseUrl,
  headers: {
    Accept: "application/json",
    Authorization: `key ${apiKey}`,
  },
};

export default apiConfig;
