import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NL from "../../Assets/Projects/NL.png";
import C1991 from "../../Assets/Projects/C1991.png"; 
import C2021 from "../../Assets/Projects/C2021.png"; 
import DH from "../../Assets/Projects/DH.jpg"; 
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Recent Projects</strong>
        </h1>
        <p style={{ color: "var(--text-color)" }}>
          Here are a few examples of projects I’ve worked on or plan to showcase.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NL}
              isBlog={false}
              title="Smart Neighborhood (New Damietta)"
              description="Graduation project proposing smart urban services using GIS & Remote Sensing techniques."
              link="/smart-neighborhood"
            />
          </Col>
<Col md={4} className="project-card">
  <div className="project-card-view">
    <div className="dual-img-container">
      <img src={C1991} alt="Landsat 1991" className="dual-img" />
      <img src={C2021} alt="Landsat 2021" className="dual-img" />
    </div>
    <div className="project-card-body">
      <h5 className="project-title">Manzala Lake Change Detection</h5>
      <p className="project-description">
        Environmental change detection using multi-temporal Landsat imagery and ENVI (1991–2021).
      </p>
      <a href="/lake-change-detection" className="btn btn-primary">View Project</a>
    </div>
  </div>
</Col>
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={DH}
    isBlog={false}
    title="Hospital Suitability (El-Dabaa)"
    description="A GIS-based analysis for identifying suitable hospital locations using ModelBuilder and planning data."
    link="/hospital-suitability"
  />
</Col>
{/*

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Urban Planning with GIS"
              description="A prototype for analyzing urban expansion using satellite imagery and ArcGIS tools."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Smart City Dashboard"
              description="A conceptual dashboard showing smart infrastructure and land use analysis in QGIS."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Remote Sensing for Agriculture"
              description="NDVI-based classification using ENVI and Google Earth Engine for precision farming."
              link="#"
            />
          </Col>
*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
