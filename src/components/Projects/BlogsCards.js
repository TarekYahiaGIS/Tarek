import React from "react";
import Card from "react-bootstrap/Card";
import { BsLink } from "react-icons/bs";

function BlogsCards(props) {
  return (
    <a
      className="blog-link"
      href={props.link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Card className="blog-card-view">
        <Card.Img variant="top" src={props.imgPath} className="blog-img" />
        <Card.Footer style={{ fontSize: "1.1em", textAlign: "center" }}>
          <BsLink />
          &nbsp;
          <strong>{props.title}</strong>
          <p style={{ margin: 0, fontSize: "0.9em", color: "#888" }}>{props.site}</p>
        </Card.Footer>
      </Card>
    </a>
  );
}

export default BlogsCards;
