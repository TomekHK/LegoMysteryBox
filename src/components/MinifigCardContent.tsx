import { CardMedia, CardContent, Typography } from "@mui/material";
import shortenString from "../helpers/shortenString";

function MinifigCardContent({ minifig }: { minifig: IMinifig }) {
  return (
    <>
      <CardMedia
        component="img"
        alt={minifig.name}
        height="140"
        sx={{ objectFit: "contain" }}
        image={minifig.set_img_url}
      />
      <CardContent>
        <Typography variant="body1" align="center">
          {shortenString(minifig.name)}
        </Typography>
      </CardContent>
    </>
  );
}

export default MinifigCardContent;
