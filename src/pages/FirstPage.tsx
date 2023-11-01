import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function FirstPage(): JSX.Element {
  return (
    <>
      <Typography variant="h4" align="center">
        LEGO Harry Potter mystery box!
      </Typography>
      <Box display="flex" justifyContent="center"></Box>
      <Box mt={2} display="flex" justifyContent="center">
        <Link to="/select">
          <Button
            variant="contained"
            color="primary"
          >
            LET'S GO!
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default FirstPage;
