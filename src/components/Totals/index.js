import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./total.module.css";

const Totals = () => {
  const [characters, setCharacters] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
      setCharacters(response.data);
    });

    axios.get("https://rickandmortyapi.com/api/episode/").then((response) => {
      setEpisodes(response.data);
    });

    axios.get("https://rickandmortyapi.com/api/location/").then((response) => {
      setLocations(response.data);
    });
  }, []);

  if (locations === null || episodes === null || characters === null) {
    return null;
  }

  return (
    <div className={styles["total"]}>
      Personajes : {characters.info.count} - Lugares : {locations.info.count} -
      Episodios : {episodes.info.count}
    </div>
  );
};
export default Totals;
