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
    h1: {
      marginBottom: "32px",
      fontSize: "2.5em",
      fontWeight: 400,
    },
    h2: {
      margin: 0,
      fontSize: "1.2em",
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.8em",
      color: "#555555",
    },
    body2: {
      fontSize: "0.8em",
      color: "#777777",
    },
  },
});

export default theme;
