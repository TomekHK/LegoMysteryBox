import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          paddingTop: "8px",
          background: "white",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            background: "#fff4db",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "8px 16px",
          background: "white",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          minHeight: "4em",
        },
      },
    },
  },
  typography: {
    allVariants: {
      color: "#555555",
    },
    h3: {
      marginBottom: "32px",
    },
  },
});

export default theme;
