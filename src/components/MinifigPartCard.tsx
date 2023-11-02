import { Paper, Typography, CardMedia, Box } from "@mui/material";
import shortenString from "../helpers/shortenString";

function MinifigPartCard({ part }: { part: IPart }) {
  return (
    <Paper
      sx={{
        width: "95%",
        display: "flex",
        paddingY: 1,
        paddingX: 2,
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        alt={part.name}
        height="90%"
        sx={{ objectFit: "contain", width: 90, marginRight: 2 }}
        image={part.part_img_url}
      />
      <Box>
        <Typography
          variant="body1"
        >
          {shortenString(part.name)}
        </Typography>
        <Typography variant="body2">Part Number: {part.part_num}</Typography>
      </Box>
    </Paper>
  );
}

export default MinifigPartCard;
