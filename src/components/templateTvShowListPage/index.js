import React from "react";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import TopTvList from "../topTvList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#bfbfbf",
    minHeight: "100vh",
    paddingTop: theme.spacing(7),
  },
}));

function TopTvListPageTemplate({ tvshows, title }) {
    console.log("wheres this", tvshows);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <TopTvList shows={tvshows} />
        </Grid>
      </Grid>
    </div>
  );
}
export default TopTvListPageTemplate;
