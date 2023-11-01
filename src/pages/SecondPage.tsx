import { Box } from "@mui/material";
import useFetchData from "../hooks/useFetchData";

const SecondPage = () => {
  const { data, error, isLoading } = useFetchData();
  return isLoading ? <Box>Loading...</Box> : <Box>Page Two</Box>;
};

export default SecondPage;
