import {
  Button,
  Card,
  CardActionArea,
  CardActions,
} from "@mui/material";
import MinifigCardContent from "./MinifigCardContent";

function MinifigCard({
  minifig,
  isSelected,
  onSelect,
}: {
  minifig: IMinifig;
  isSelected: boolean;
  onSelect: React.MouseEventHandler<HTMLButtonElement>;
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
        <MinifigCardContent minifig={minifig} />
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
