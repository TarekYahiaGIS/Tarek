import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "../Resume/ResumeContent";
import NL from "../../Assets/Projects/NL.png";
import LST from "../../Assets/Projects/LST.png";
import CP from "../../Assets/Projects/CP.png";
import STB from "../../Assets/Projects/STB.png";
import MC from "../../Assets/Projects/MC.png";
import SBS from "../../Assets/Projects/SBS.png";
import "../../style.css";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

function SmartNeighborhood() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Helmet>
        <title>Smart Neighborhood Project | Tarek Yahia Portfolio</title>
        <meta
          name="description"
          content="Graduation project showcasing a smart neighborhood transformation in New Damietta using GIS and Remote Sensing technologies."
        />
        <meta property="og:title" content="Smart Neighborhood | Tarek Yahia Portfolio" />
        <meta
          property="og:description"
          content="A GIS-based project proposing smart services and infrastructure improvements in New Damietta."
        />
        <meta property="og:image" content="https://tarekyahia.site/preview.jpg" />
        <meta property="og:url" content="https://tarekyahia.site/smart-neighborhood" />
      </Helmet>

      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Project Details</h3>

            <Resumecontent
              title="Project Title"
              content={[
                "Transforming the Distinguished Neighborhood into a Smart Neighborhood in New Damietta City (using GIS & Remote Sensing).",
              ]}
            />

            <Resumecontent
              title="Project Summary"
              content={[
                "This project involved creating a sustainable and smart urban model using GIS and remote sensing techniques.",
                "It assessed current infrastructure and proposed smart alternatives such as:",
                "- Smart lighting and waste bins",
                "- Mobile clinics",
                "- Smart buses and renewable energy solutions",
                "Spatial analysis and satellite imagery were used to develop an integrated transformation plan.",
              ]}
            />

            <Resumecontent
              title="My Role"
              content={[
                "Digitized spatial data (infrastructure, land use).",
                "Conducted spatial analysis using ArcGIS Pro and QGIS.",
                "Analyzed NDVI, energy usage, and land efficiency through remote sensing.",
                "Created final cartographic visualizations for reporting and presentations.",
              ]}
            />

            <Resumecontent
              title="Project Focus"
              content={[
                "Smart urban design",
                "GIS-based infrastructure assessment",
                "Remote sensing for environmental indicators",
                "Sustainable Development Goals (SDGs)",
              ]}
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Map Gallery</h3>
            <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
              {[
                { src: NL, alt: "Neighborhood Location", label: "Neighborhood Location" },
                { src: LST, alt: "Land Surface Temperature", label: "LST Map" },
                { src: CP, alt: "Car Parking Map", label: "Car Parking Map" },
                { src: STB, alt: "Smart Trash Bins Map", label: "Smart Trash Bins Map" },
                { src: MC, alt: "Mobile Clinics Map", label: "Mobile Clinics Map" },
                { src: SBS, alt: "Smart Bus Stops", label: "Smart Bus Stops Map" },
              ].map((map, i) => (
                <Col key={i} md={6} sm={12} className="image-gallery">
                  <div className="map-hover compact-map">
                    <a href={map.src} target="_blank" rel="noopener noreferrer">
                      <img
                        src={map.src}
                        alt={map.alt}
                        className="img-fluid rounded map-img"
                      />
                    </a>
                    <div className="overlay">{map.label}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default SmartNeighborhood;
