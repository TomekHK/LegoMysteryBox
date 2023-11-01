import { Box, Card, Grid } from "@mui/material";
import { useMinifigContext } from "../contexts/MinifigContext";
import MinifigCardContent from "../components/MinifigCardContent";
import useFetchSetParts from "../hooks/useFetchSetParts";

function ThirdPage() {
  const { selectedFigure } = useMinifigContext();
  const { data, error, isLoading } = useFetchSetParts(selectedFigure?.set_num);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          <Box sx={{ border: "3px solid red" }}>1</Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          {selectedFigure && (
            <Card>
              <MinifigCardContent minifig={selectedFigure} />
            </Card>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default ThirdPage;
