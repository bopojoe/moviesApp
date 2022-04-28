import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { getTopTv } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";

const TopTvPage = (props) => {
  const [shows, setShows] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);

  const { data, error, isLoading, isError } = useQuery("loadtoptv", getTopTv);
  console.log("returned",data);
  

  if (isLoading) {
      console.log("loading")
    return <Spinner />;
  }

  if (isError) {
      console.log("error", error.message)
    return <h1>{error.message}</h1>;
  }

  return (
    <PageTemplate
      title="Top Tv Shows"
      tvshows={data}
    />
  );
};
export default TopTvPage;
