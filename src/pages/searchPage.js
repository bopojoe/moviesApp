import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { multiSearch } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Grid from "@material-ui/core/Grid";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import { Typography, TextField, Box, Button } from "@material-ui/core";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import TvShowCard from "../components/tvShowCard";
import ActorCard from "../components/actorCard";
import MovieCard from "../components/movieCard";

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

const SearchPage = (props) => {
  const [shows, setShows] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);
  const [results, setResults] = useState([]);

  let result = "test";

  const movieOrTV = (result) => {
    console.log(result.media_type);
    if (result.media_type == "movie") {
      return (
        <Grid key={result.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <MovieCard
            key={result.id}
            movie={result}
            action={(movie) => {
              console.log("test");
            }}
          />
        </Grid>
      );
    } else if (result.media_type == "tv") {
      return (
        <Grid key={result.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TvShowCard show={result} />
        </Grid>
      );
    } else if (result.media_type == "person") {
      return (
        <Grid key={result.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ActorCard key={result.id} actor={result} />;
        </Grid>
      );
    }
  };

  return (
    <>
      <Box sx={{ mt: 20, pl: "45%" }}>
        <TextField
          sx={{}}
          id="searchField"
          variant="outlined"
          placeholder="Search"
        />
      </Box>

      <Box sx={{ pt: "10px", pl: "45%" }}>
        <Button
          onClick={() => {
            const sField = document.getElementById("searchField");
            let query = sField.value;
            multiSearch({ query }).then((res) => {
              setResults(res);
            });
          }}
        >
          search
        </Button>
      </Box>
      <Grid item container spacing={5}>
        {results.map((result) => {
          return movieOrTV(result);
        })}
      </Grid>
    </>
  );
};

export default SearchPage;
