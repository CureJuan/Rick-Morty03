import axios from "axios";
import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams, Link } from "react-router-dom";
import Card from "../../components/Card";
import { TiArrowBackOutline } from "react-icons/ti";

export const LocationDetailContainer = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((response) => {
        setLocation(response.data);
      });
  }, [id]);

  if (!location) {
    return null;
  }

  const residents = location.residents.map((url) => url.split("/").pop());

  return (
    <div className="container">
      <Card
        className="big-card"
        image="/images/location_mock.jpg" // La api de locations, no trae imagenes, asi que usamos una falsa
      >
        <Link to="/?item=locations">
          <button className="button_volver">
            <TiArrowBackOutline />{" "}
          </button>
        </Link>
        <Col className="title">{location.name}</Col>
        <Row>
          <Col xs={20} sm={10}>
            <strong>Tipo: </strong> {location.type} <br />
            <br />
            <strong>Dimension: </strong> {location.dimension} <br />
            <br />
            <strong>Fecha de Creacion: </strong> : {location.created} <br />
            <br />
            <strong>Cantidad de residentes: </strong> {residents.length}
          </Col>
        </Row>
      </Card>
    </div>
  );
};
