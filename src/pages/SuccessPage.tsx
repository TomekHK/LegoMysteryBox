import { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SuccessPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, []);
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box>
          <Typography variant="h4" align="center">
            Congratulations! Enjoy your new figure !
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default SuccessPage;
