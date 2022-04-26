import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from './pages/upcomingMoviesPage'

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Switch>
        <Route
          exact
          path="/movies/favourites"
          component={FavouriteMoviesPage}
        />

        <Route exact path="/" component={HomePage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
