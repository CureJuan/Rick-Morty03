import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Card from "../../components/Card";
import { AiFillEye } from "react-icons/ai";
import "./character.styles.css";

const Characters = ({ characters }) => {
  
  return (
    <div>
      <Row>
        {characters.results.map((character) => {
          return (
            <Col xs={12} sm={6} md={6} lg={4} key={`character-${character.id}`}>
              <Card
                title={character.name}
                image={character.image}
                to={`/characters/${character.id}`}
              >
                <button className="button_select">
                  <AiFillEye />
                </button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Characters;
