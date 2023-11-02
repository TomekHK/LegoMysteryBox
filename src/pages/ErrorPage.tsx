import { useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
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
          <Typography variant="h4" color="error" align="center">
            Something went wrong. We're already fixing it.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default ErrorPage;
