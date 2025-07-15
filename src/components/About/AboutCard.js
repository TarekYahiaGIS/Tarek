import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hello! I'm <span className="purple">Tarek Yahia</span> from <span className="black">Egypt</span>.
            <br />I'm a GIS Analyst with a strong background in geospatial technologies, remote sensing, and mapping solutions.
            <br />
            <br />
            I'm passionate about combining data, geography, and technology to solve real-world problems.
            <br />
            <br />
            When I’m not mapping the world, here’s what I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new mapping and surveying tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching football and analyzing matches
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning and experimenting with new tech
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
