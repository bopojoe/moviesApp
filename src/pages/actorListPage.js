import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/actorListTemplatePage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getMovieCredits, getMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

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

const ActorListPage = () => {
    const { id } = useParams();
    console.log(id);
  const { data, error, isLoading, isError } = useQuery(
    ["cast", { id: id }],
    getMovieCredits
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



  return (
    <>
      <PageTemplate
        title="Actors for the movie"
        data={data}
      />

    </>
  );
};

export default ActorListPage;
