import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function MinifigCard({
  minifig,
  isSelected,
  onSelect,
}: {
  minifig: IMinifig;
  isSelected: boolean;
  onSelect: any;
}) {
  return (
    <Card
      sx={{
        boxShadow: isSelected
          ? "0px 0px 10px 5px rgba(255, 165, 0, 0.5)"
          : "none",
      }}
    >
      <CardActionArea onClick={onSelect}>
        <CardMedia
          component="img"
          alt={minifig.name}
          height="140"
          sx={{ objectFit: "contain" }}
          image={minifig.set_img_url}
        />
        <CardContent>
          <Typography variant="h6">{minifig.name}</Typography>
          <Typography variant="body2">Set Number: {minifig.set_num}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={minifig.set_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show details
        </Button>
      </CardActions>
    </Card>
  );
}

export default MinifigCard;
