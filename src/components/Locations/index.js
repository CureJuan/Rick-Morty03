import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "../../components/Card";
import { AiFillEye } from "react-icons/ai";
import "../Characters/character.styles.css";

const Locations = ({ locations }) => {
  return (
    <Row>
      {locations.results.map((location) => {
        return (
          <Col xs={12} sm={6} md={6} lg={4} key={`location-${location.id}`}>
            <Card
              title={location.name}
              image="/images/location_mock.jpg" // La api de locations, no trae imagenes, asi que usamos una falsa
              to={`/locations/${location.id}`}
            >
              <button className="button_select">
                <AiFillEye />
              </button>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Locations;
