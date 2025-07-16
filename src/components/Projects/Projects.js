import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NL from "../../Assets/Projects/NL.png";
import C1991 from "../../Assets/Projects/C1991.png";
import C2021 from "../../Assets/Projects/C2021.png";
import DH from "../../Assets/Projects/DH.jpg";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="project-section">
      <Helmet>
        <title>Projects | Tarek Yahia – GIS Analyst</title>
        <meta
          name="description"
          content="Explore GIS and remote sensing projects by Tarek Yahia including smart cities, land change, and planning analysis."
        />
        <meta property="og:title" content="Projects | Tarek Yahia – GIS Analyst" />
        <meta
          property="og:description"
          content="Explore GIS and smart urban planning projects, including change detection and suitability analysis."
        />
        <meta property="og:url" content="https://tarekyahia.site/projects" />
      </Helmet>

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
                <a href="/lake-change-detection" className="btn btn-primary">
                  View Project
                </a>
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
