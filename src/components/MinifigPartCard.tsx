import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function MinifigPartCard({ part }: { part: IPart }) {
  return (
    <Card
      sx={{
        height: "80px",
        display: "flex",
        padding: "8px",
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
      }}
    >
      <CardMedia
        component="img"
        alt={part.name}
        height="90%"
        sx={{ objectFit: "contain", width: "90px" }}
        image={part.part_img_url}
      />
      <CardContent>
        <Typography
          component="div"
          variant="body2"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {part.name}
        </Typography>
        <Typography variant="body1">Part Number: {part.part_num}</Typography>
      </CardContent>
    </Card>
  );
}

export default MinifigPartCard;
