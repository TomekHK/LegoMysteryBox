import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";

function MinifigCard({ minifig }: { minifig: IMinifig }) {
  return (
    <Card>
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
        <Link
          href={minifig.set_url}
          target="_blank"
          rel="noopener noreferrer"
          variant="body2"
        >
          Show details
        </Link>
      </CardContent>
    </Card>
  );
}

export default MinifigCard;
