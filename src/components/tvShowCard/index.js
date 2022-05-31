import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import TvShowContext from "../../contexts/tvShowContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function TvShowCard({ show, action }) {
  const classes = useStyles();
  const history = useHistory();
  // const { myTVfavourites, addToFavourites } = useContext(TvShowContext);

  //   if (myTVPlaylists.find((id) => id === show.id)) {
  //     show.favourite = true;
  //   } else {
  //     show.favourite = false;
  //   }

  //   {
  //     action(show);
  //   }

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        avatar={
          show.favourite ? (
            <Avatar className={classes.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {show.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        onClick={()=>{
          console.log("test");
        }}
        className={classes.media}
        image={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {show.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {show.vote_average}{" "}
            </Typography>
            <Button variant="contained" onClick={()=>{history.push(`/tv/${show.id}`)}}>
                show details
            </Button>
          </Grid>
        </Grid>
      </CardContent>
      {/* <CardActions disableSpacing>
        {action(show)}
        <Link to={`/movies/${show.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions> */}
    </Card>
  );
}
