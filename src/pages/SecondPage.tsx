import { Box, Grid, Typography } from "@mui/material";
import useFetchData from "../hooks/useFetchData";
import shuffleArray from "../helpers/shuffleArray";
import MinifigCard from "../components/MinifigCard";

const SecondPage = () => {
  const { data, error, isLoading } = useFetchData();
  const randomFigures = shuffleArray(data)
    .filter(
      (figure) =>
        figure.name &&
        typeof figure.num_parts === "number" &&
        typeof figure.set_img_url === "string" &&
        typeof figure.set_num === "string" &&
        typeof figure.set_url === "string"
    )
    .slice(0, 3);

  return isLoading && randomFigures.length !== 3 ? (
    <Box>Loading...</Box>
  ) : (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Choose Your Minifig
      </Typography>
      <Grid container spacing={2}>
        {randomFigures.map((figure) => (
          <Grid item xs={12} sm={6} md={4}>
            <MinifigCard minifig={figure} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SecondPage;
