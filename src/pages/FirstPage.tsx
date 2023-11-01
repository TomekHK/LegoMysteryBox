import { Typography } from "@mui/material";
import NavigationButton from "../components/NavigationButton";

function FirstPage() {
  return (
    <>
      <Typography variant="h3" align="center" color="#555555" >
        LEGO Harry Potter mystery box!
      </Typography>
      <NavigationButton linkTo="/select" label="LET'S GO!" />
    </>
  );
}

export default FirstPage;
