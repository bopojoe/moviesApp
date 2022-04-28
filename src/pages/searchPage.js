import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { getTopTv } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import {Typography} from "@material-ui/core"
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const SomePage = (props) => {
  const [shows, setShows] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);

  const { data, error, isLoading, isError } = useQuery(
    "loadtoptv",
    getTopTv
  );
  return <Typography>{data}</Typography>;
  }

  export default SomePage;