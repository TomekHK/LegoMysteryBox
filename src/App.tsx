import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FirstPage from "./pages/FirstPage";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import { MinifigContextProvider } from "./contexts/MinifigContext";

function App() {
  return (
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
            </Routes>
          </Router>
        </MinifigContextProvider>
      </Container>
    </Box>
  );
}

export default App;
