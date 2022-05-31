import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import ActorListPage from "./pages/actorListPage";
import FavouriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import TopTvPage from "./pages/topTvPage";
import SomePage from "./pages/searchPage";
import ShowDetailsPage from "./pages/tvDetailsPage";
import SearchPage from "./pages/searchPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import AuthProvider from "./components/auth/authContext";
import PrivateRoute from "./components/privateRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <SiteHeader address={Window.location}/>
          <MoviesContextProvider>
            <Switch>
              <PrivateRoute
                exact
                path="/movies/favourites"
                component={FavouriteMoviesPage}
              />

              <PrivateRoute exact path="/" component={HomePage} />
              <PrivateRoute
                exact
                path="/reviews/form"
                component={AddMovieReviewPage}
              />
              <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
              <PrivateRoute
                exact
                path="/movies/upcoming"
                component={UpcomingMoviesPage}
              />
              <PrivateRoute path="/cast/:id" component={ActorListPage} />
              <PrivateRoute path="/movies/:id" component={MoviePage} />
              <PrivateRoute exact path="/tv/top" component={TopTvPage} />
              <PrivateRoute path="/tv/:id" component={ShowDetailsPage} />
              <PrivateRoute path="/search" component={SearchPage} />
              <Route path="/login">
                <LoginPage
                  location={{ state: { pathname: "/" } }}
                  title={"Login"}
                />
              </Route>
              <Route path="/register">
                <RegisterPage
                  location={{ state: { pathname: "/" } }}
                  title={"Register"}
                />
              </Route>

              {/* <Redirect from="*" to="/" /> */}
            </Switch>
          </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
