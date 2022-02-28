import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../../components/Card";
import { Row, Col } from "react-bootstrap";
import { TiArrowBackOutline } from "react-icons/ti";

export const CharacterDetailContainer = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
      });
  }, [id]);

  if (!character) {
    return null;
  }

  const episodes = character.episode.map((url) => url.split("/").pop());

  const randomItem = episodes[Math.floor(Math.random() * episodes.length)];

  return (
    <div className="container">
      <Card className="big-card" image={character.image}>
        <Link to="/?item=characters">
          <button className="button_volver">
            <TiArrowBackOutline />{" "}
          </button>
        </Link>
        <Col className="title">{character.name}</Col>
        <Row>
          <Col xs={12} sm={6}>
            <strong>Estado</strong> : {character.status} <br />
            <br />
            <strong>Especie</strong> : {character.species} <br />
            <br />
            <strong>Genero</strong>: {character.gender}
          </Col>
          <Col xs={12} sm={6}>
            <strong>Origen</strong>: {character.origin.name} <br />
            <br />
            <strong>Ubicacion</strong> : {character.location.name} <br />
            <br />
            <strong>Info episodio</strong> :{" "}
            <Link className="info_ep" to={`/episodes/${randomItem}`}>
              {" "}
              <b>{randomItem}</b>
            </Link>
          </Col>
          <br /><br /><br />
          <Col>
            <Link className="relacionados" to={`/characters/${randomItem}`}>
              Personajes Relacionados{" "}
            </Link>
          </Col>
        </Row>
        <br />
      </Card>
    </div>
  );
};
