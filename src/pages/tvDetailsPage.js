import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templateShowPage ";
import { getTvShow } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import InformationComponent from "../components/information";
import ShowDetails from "../components/showDetails";

const ShowDetailsPage = (props) => {
  const { id } = useParams();

  const {
    data: show,
    error,
    isLoading,
    isError,
  } = useQuery(["show", { id: id }], getTvShow);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {show ? (
        <>
          <PageTemplate show={show}>
            <ShowDetails show={show} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default ShowDetailsPage;
