export const getMovieCredits = async (args) => {
  console.log(args.queryKey);
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  const res = await fetch(`http://localhost:8080/api/movies/credits/${id}`, {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  });
  console.log("res = ", res);
  return res.json();
};

export const getTopTv = () => {
  return fetch("http://localhost:8080/api/tv", {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((json) => {
      return json.results;
    });
};

export const getUpcomingMovies = () => {
  return fetch("http://localhost:8080/api/movies/upcoming", {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json.results;
    });
};

export const getMovie = (args) => {
  console.log(args);
  const [, idPart] = args.queryKey;
  const { id } = idPart;

  return fetch(`http://localhost:8080/api/movies/${id}`, {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    });
};

export const getTvShow = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(`http://localhost:8080/api/tv/${id}`, {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    });
};

export const getMovieImages = async ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  const res = await fetch(`http://localhost:8080/api/movies/images/${id}`, {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  });
  return res.json();
};

export const multiSearch = async ({ query }) => {
  return fetch(`http://localhost:8080/api/search?query=${query}`, {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

export const getShowImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `http://localhost:8080/api/tv/images/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    {
      headers: {
        Authorization: window.localStorage.getItem("token"),
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getMovieReviews = async (id) => {
  const res = await fetch(`http://localhost:8080/api/movies/reviews/${id}`, {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  });
  return res.json();
};

export const registerAcc = (email, password, firstName, lastName) => {
  return fetch(`http://localhost:8080/api/accounts`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    }),
  }).then((res) => res.json());
};

export const login = (email, password) => {
  console.log(process.env.API_ENDPOINT);
  return fetch(`http://localhost:8080/api/accounts/security/token`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ email: email, password: password }),
  }).then((res) => res.json());
};

export const getMovies = async () => {
  const res = await fetch("http://localhost:8080/api/movies", {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  });
  return res.json();
};
