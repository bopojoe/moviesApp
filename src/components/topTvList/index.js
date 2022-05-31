import React from "react";
import Show from "../tvShowCard";
import Grid from "@material-ui/core/Grid";

const TopTvList = ( {shows} ) => {
  let tvCards = shows.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Show key={s.id} show={s} />
    </Grid>
  ));
  return tvCards;
};

export default TopTvList;
