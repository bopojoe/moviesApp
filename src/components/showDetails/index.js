import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// New
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";

// "adult",
//   "backdrop_path",
//   "created_by",
//   "episode_run_time",
//   "first_air_date",
//   "genres",
//   "homepage",
//   "id",
//   "in_production",
//   "languages",
//   "last_air_date",
//   "last_episode_to_air",
//   "name",
//   "next_episode_to_air",
//   "networks",
//   "number_of_episodes",
//   "number_of_seasons",
//   "origin_country",
//   "original_language",
//   "original_name",
//   "overview",
//   "popularity",
//   "poster_path",
//   "production_companies",
//   "production_countries",
//   "seasons",
//   "spoken_languages",
//   "status",
//   "tagline",
//   "type",
//   "vote_average",
//   "vote_count";


const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {
    //New
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const ShowDetails = ({ show }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false); // New
const hasAdultContent=(show)=>{
  if(show.adult){
    return (
      <Chip label="AdultContent" className={classes.chipLabel} color="Red" />
    );
  }
}
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {show.overview}
      </Typography>
      <div className={classes.chipRoot}>
        <Paper component="ul" className={classes.chipSet}>
          <li>
            <Chip
              label="Genres"
              className={classes.chipLabel}
              color="primary"
            />
          </li>
          {show.genres.map((g) => (
            <li key={g.name}>
              <Chip label={g.name} className={classes.chip} />
            </li>
          ))}
        </Paper>
        <Paper component="ul" className={classes.chipSet}>
          {hasAdultContent(show)}
          <li>
            <Chip
              label={`Number of Seasons: ${show.number_of_seasons}`}
              className={classes.chipLabel}
              color="primary"
            />
            <Chip
              label={`Number of Episodes: ${show.number_of_episodes}`}
              className={classes.chipLabel}
              color="primary"
            />
          </li>
        </Paper>
        <Paper component="ul" className={classes.chipSet}>
          <Chip
            icon={<AccessTimeIcon />}
            label={`${show.episode_run_time} min/episode`}
          />
          {/* <Chip
            icon={<MonetizationIcon />}
            label={`${show.revenue.toLocaleString()}`}
          /> */}
          <Chip
            icon={<StarRate />}
            label={`${show.vote_average} (${show.vote_count}`}
          />
          <Chip label={`Release Date: ${show.first_air_date}`} />
        </Paper>
      </div>
      {/* New */}
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {/* <MovieReviews show={show} /> */}
      </Drawer>
    </>
  );
};
export default ShowDetails;
