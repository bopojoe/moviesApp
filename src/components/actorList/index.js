import React from "react";
import ActorCard from "../actorCard";
import Grid from "@material-ui/core/Grid";

const ActorList = ({ cast }) => {
  let actorCards = cast.map((a) => (
    <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ActorCard key={a.id} actor={a} />
    </Grid>
  ));
  return actorCards;
};

export default ActorList;
