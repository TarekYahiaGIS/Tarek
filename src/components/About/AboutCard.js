import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi, I'm <span className="purple">Tarek Yahia</span> from <span className="black">Egypt</span>.<br />
            I’m a <strong>GIS Analyst</strong> with a deep interest in geospatial technologies, remote sensing, and smart mapping solutions.
            <br />
            <br />
            I’m passionate about blending <strong>data</strong>, <strong>geography</strong>, and <strong>technology</strong> to address real-world challenges through spatial analysis.
            <br />
            <br />
            Outside of work, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new GIS & mapping tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching football and analyzing matches (especially for FPL)
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning and experimenting with the latest technologies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
