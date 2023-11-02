import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import ErrorPage from "./pages/ErrorPage";
import { MinifigContextProvider } from "./contexts/MinifigContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        width="100vw"
      >
        <Container maxWidth="lg">
          <MinifigContextProvider>
            <Router>
              <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/select" element={<SecondPage />} />
                <Route path="/shipping" element={<ThirdPage />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="/success" element={<SuccessPage />} />
              </Routes>
            </Router>
          </MinifigContextProvider>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
