import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/actorListTemplatePage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getMovieCredits, getMovies } from "../api/lab-api";
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

const ActorListPage = (props) => {
  const { id } = useParams();
   console.log(id);
  // const id = 526896;
  const {data, isLoading, isError, error} = useQuery(
    ["cast", { id: id }],
    getMovieCredits
  );
  // const { data } = getMovieCredits(id);
  console.log(data);
  // const { filterValues, setFilterValues, filterFunction } = useFiltering(
  //   [],
  //   [titleFiltering, genreFiltering]
  // );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
    {/* {data} */}
      <PageTemplate title="Actors for the movie" data={data} />
    </>
  );
};

export default ActorListPage;
