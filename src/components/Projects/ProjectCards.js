import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from 'react-icons/bi';

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="card-img-container">
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt="card-img" 
          className="project-card-img"
        />
      </div>
      <Card.Body className="card-content-wrapper">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="card-description">
          {props.description}
        </Card.Text>
        <div className="card-btn-container">
          <Button variant="primary" href={props.link} target="_blank">
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? 'View Blog' : 'View Project'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;