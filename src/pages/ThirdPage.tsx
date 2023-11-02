import { Box, Card, Grid, List, ListItem } from "@mui/material";
import { useMinifigContext } from "../contexts/MinifigContext";
import MinifigCardContent from "../components/MinifigCardContent";
import useFetchSetParts from "../hooks/useFetchSetParts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MinifigPartCard from "../components/MinifigPartCard";
import SubmitForm from "../components/ShippingForm";
import Loader from "../components/loader";

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
          {selectedFigure && (
            <Box>
              <Card sx={{ marginX: "16px" }}>
                <MinifigCardContent minifig={selectedFigure} />
              </Card>
              <List>
                {data?.map((part) => (
                  <ListItem>
                    <MinifigPartCard part={part.part} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default ThirdPage;
