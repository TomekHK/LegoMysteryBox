import { Typography } from "@mui/material";
import { useMinifigContext } from "../contexts/MinifigContext";

function ThirdPage() {
  const { selectedFigure } = useMinifigContext();
  return (
    <>
      <Typography variant="h4" align="center">
        Shipping Details
      </Typography>
    </>
  );
}

export default ThirdPage;
