import { Typography } from "@mui/material";
import NavigationButton from "../components/NavigationButton";

function FirstPage() {
  return (
    <>
      <Typography variant="h3" align="center">
        LEGO Harry Potter mystery box!
      </Typography>
      <NavigationButton linkTo="/select" label="LET'S GO!" />
    </>
  );
}

export default FirstPage;
