import React from "react";
import PageTemplate from "../components/templateTvShowListPage";

import data from "./tvData"
import detailsdata from "./sampleTvDetails"

export default {
  title: "TV/tvShows",
  component: PageTemplate,
};

export const Basic = () => {console.log([data.results]); return <PageTemplate title="Actors for the movie" tvshows={data.results} />;};



export const showDetail = () => {
  console.log([data.results]);
  console.log(Object.keys(detailsdata));
  return(<p>test</p>)
};
Basic.storyName = "Default";

