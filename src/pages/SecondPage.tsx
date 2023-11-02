import { Box, Grid, Typography } from "@mui/material";
import useFetchData from "../hooks/useFetchFigures";
import shuffleArray from "../helpers/shuffleArray";
import MinifigCard from "../components/MinifigCard";
import { useEffect, useState } from "react";
import NavigationButton from "../components/NavigationButton";
import { useMinifigContext } from "../contexts/MinifigContext";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
  const { data, error, isLoading } = useFetchData();
  const { selectedFigure, selectFigure } = useMinifigContext();
  const [randomFigures, setRandomFigures] = useState<IMinifig[]>([]);
  
  const navigate = useNavigate();

  const handleMinifigSelect = (figure: IMinifig) => {
    selectFigure(selectedFigure === figure ? null : figure);
  };

  useEffect(() => {
    setRandomFigures(
      shuffleArray(data)
        .filter(
          (figure) =>
            figure.name &&
            typeof figure.num_parts === "number" &&
            typeof figure.set_img_url === "string" &&
            typeof figure.set_num === "string" &&
            typeof figure.set_url === "string"
        )
        .slice(0, 3)
    );
  }, [data]);

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error]);

  return isLoading && randomFigures.length !== 3 ? (
    <Box>Loading...</Box>
  ) : (
    <>
      <Typography variant="h3" align="center" gutterBottom>
        Choose Your Minifig
      </Typography>
      <Grid container spacing={2}>
        {randomFigures.map((figure) => (
          <Grid item xs={12} sm={6} md={4} key={figure.set_num}>
            <MinifigCard
              minifig={figure}
              isSelected={selectedFigure === figure}
              onSelect={() => handleMinifigSelect(figure)}
            />
          </Grid>
        ))}
      </Grid>
      <NavigationButton
        linkTo="/shipping"
        label="PROCEED TO SHIPMENT"
        disabled={!randomFigures.length || !selectedFigure}
      />
    </>
  );
};

export default SecondPage;
