import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/lab-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
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

const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);

  const { data, error, isLoading, isError } = useQuery(
    "load upcoming",
    getUpcomingMovies
  );
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


//   const favourites = movies.filter((m) => m.favourite);
//   localStorage.setItem("favourites", JSON.stringify(favourites));

//   const addToFavourites = (movieId) => {
//     const updatedMovies = movies.map((m) =>
//       m.id === movieId ? { ...m, favourite: true } : m
//     );
//     setMovies(updatedMovies);
//   };

//   useEffect(() => {
//     getUpcomingMovies().then((movies) => {
//       setMovies(movies);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={data}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />;
      }}
    />
  );
};
export default UpcomingMoviesPage;
