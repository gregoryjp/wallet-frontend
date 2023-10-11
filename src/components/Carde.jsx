import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const Carde = () => {
  return (
    <Card
      //con esto podemos hacer el efecto de selecion de una card!
      sx={{
        transition: "0.25",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://via.placeholder.com/500x200"
          height="200"
          alt="una description"
          sx={{ mt: 4 }}
        />

        <CardContent>
          <Typography variant="h5"> card Title</Typography>

          <Typography component="p" variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            itaque aliquam dolor, id qui fugit, quod vitae ipsa maiores
            voluptatum eos ea. Optio assumenda non repellendus perspiciatis quod
            maiores quia?
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button variant="contained">Add</Button>
        <Button color="error">Remove</Button>
      </CardActions>
    </Card>
  );
};
