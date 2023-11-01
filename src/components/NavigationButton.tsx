import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

interface INavigationButton {
  linkTo: string;
  label: string;
  disabled?: boolean;
}

function NavigationButton({ linkTo, label, disabled }: INavigationButton) {
  return (
    <Box mt={2} display="flex" justifyContent="center">
      <Link to={linkTo}>
        <Button variant="contained" color="primary" disabled={disabled}>
          {label}
        </Button>
      </Link>
    </Box>
  );
}

export default NavigationButton;
