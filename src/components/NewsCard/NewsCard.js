import React from "react";
import { Card, Col } from "react-bootstrap";

const NewsCard = ({ news: { urlToImage, source, description } }) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{source.name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsCard;
