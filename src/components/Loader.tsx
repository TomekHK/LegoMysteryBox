import { CircularProgress, Typography, Box } from "@mui/material";

function Loader() {
  return (
    <Box textAlign="center">
      <CircularProgress size={80} thickness={4} color="primary" />
      <Typography variant="h5" color="textSecondary" style={{ marginTop: 16 }}>
        Loading...
      </Typography>
    </Box>
  );
}

export default Loader;
