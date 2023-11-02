import { Box, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import { useMinifigContext } from "../contexts/MinifigContext";
import MinifigCardContent from "../components/MinifigCardContent";
import useFetchSetParts from "../hooks/useFetchSetParts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MinifigPartCard from "../components/MinifigPartCard";
import SubmitForm from "../components/ShippingForm";
import Loader from "../components/Loader";

function ThirdPage() {
  const { selectedFigure } = useMinifigContext();
  const { data, error, isLoading } = useFetchSetParts(selectedFigure?.set_num);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedFigure == null) {
      navigate("/");
    }
  }, [selectedFigure]);

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          <Box>
            <SubmitForm />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          {selectedFigure && data && (
            <List sx={{ paddingBottom: 0 }}>
              <Paper sx={{ p: 2, m: 2, boxShadow: 1 }}>
                <MinifigCardContent minifig={selectedFigure} />
              </Paper>
              <ListItem>
                <Paper
                  sx={{
                    p: 1,
                    m: 0,
                    boxShadow: 1,
                    display: "flex",
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="body1" align="center">
                    THERE ARE {data?.length} PARTS IN THIS MINIFIG:
                  </Typography>
                </Paper>
              </ListItem>
              {data?.map((part) => (
                <ListItem sx={{ paddingTop: 0 }} key={part.id}>
                  <MinifigPartCard part={part.part} />
                </ListItem>
              ))}
            </List>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default ThirdPage;
