import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import { getData } from "../util/API";

import "./Main.css";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getData('https://swapi.dev/api/films/');
      const data = await res.json();
      setMovies(
        data.results.map((movie) => (
          <Movie key={movie.episode_id} data={movie} />
        ))
      );
    }
    fetchData();
  }, []);

  return <div className="Main">{movies}</div>;
};

export default Main;
