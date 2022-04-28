import React, { useState } from "react";

export const TvShowContext = React.createContext(null);

const TvShowContextProvider = (props) => {
  const [myTVPlaylists, setMyPlaylists] = useState([]);
  const [myTVReviews, setMyReviews] = useState({});
  const [myTVfavourites, setFavourites] = useState([]);

  const addToFavourites = (show) => {
    let updatedFavourites = [...myTVPlaylists];
    if (!myTVPlaylists.includes(show.id)) {
      updatedFavourites.push(show.id);
    }
    setFavourites(updatedFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (show) => {
    setFavourites(myTVPlaylists.filter((sId) => sId !== show.id));
  };

  const addReview = (show, review) => {
    setMyReviews({ ...myTVReviews, [show.id]: review });
  };

  const addToPlaylist = (show) => {
    let updatedPlaylists = [...myTVPlaylists];
    if (!myTVPlaylists.includes(show.id)) {
      updatedPlaylists.push(show.id);
    }
    console.log(updatedPlaylists);
    setMyPlaylists(updatedPlaylists);
  };

  return (
    <TvShowContext.Provider
      value={{
        myTVfavourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToPlaylist,
      }}
    >
      {props.children}
    </TvShowContext.Provider>
  );
};

export default TvShowContextProvider;
