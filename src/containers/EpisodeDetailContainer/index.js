import axios from "axios";
import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "../../components/Card";
import { useParams, Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";

export const EpisodeDetailContainer = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((response) => {
        setEpisode(response.data);
      });
  }, [id]);

  if (!episode) {
    return null;
  }

  const characters = episode.characters.map((url) => url.split("/").pop());

  return (
    <div className="container">
      <Card
        className="big-card"
        image="/images/episodes_mock.png" // La api de locations, no trae imagenes, asi que usamos una falsa
      >
        <Link to="/?item=episodes">
          <button className="button_volver">
            <TiArrowBackOutline />{" "}
          </button>
        </Link>
        <Col className="title">{episode.name}</Col>
        <Row>
          <Col xs={12} sm={10}>
            <strong>Fecha de estreno: </strong> {episode.air_date} <br />
            <br />
            <strong>Episodio: </strong> {episode.episode} <br />
            <br />
            <strong>Personajes: </strong>
            <Col className="colums">
              {characters.map((item) => (
                <Link to={`/characters/${item}`}>
                  <li className="colums_li" key={item.id}>
                    {" "}
                    {item}{" "}
                  </li>
                </Link>
              ))}
            </Col>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
