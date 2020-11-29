import React, { useState, useEffect } from "react";

import "./Movie.css";

const Movie = (props) => {
  const { title, episode_id } = props.data;
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(`${episode_id}`) === "fav") {
      setSelected(true);
    }
  }, [selected]);

  const addToFav = (id) => {
    localStorage.setItem(`${id}`, "fav");
    setSelected(true);
  };

  const removeFav = (id) => {
    localStorage.removeItem(`${id}`);
    setSelected(false);
  };

  let bg;

  if (localStorage.getItem(`${episode_id}`) === "fav") {
    bg = (
      <div className="Movie-title selected">
        <div className="Movie-name">{title}</div>
        <button onClick={() => removeFav(episode_id)}>Remove Fev</button>
      </div>
    );
  } else {
    bg = (
      <div className="Movie-title">
        <div className="Movie-name">{title}</div>
        <button onClick={() => addToFav(episode_id)}>Add To Fev</button>
      </div>
    );
  }

  return (
    <div className="Movie">
      <img src={`${process.env.PUBLIC_URL}/assets/${title}.jpg`} alt="poster" />
      {bg}
    </div>
  );
};

export default Movie;
