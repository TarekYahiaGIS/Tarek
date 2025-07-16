import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "../Resume/ResumeContent";
import DH from "../../Assets/Projects/DH.jpg";
import "../../style.css";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

function HospitalSuitability() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Helmet>
        <title>Hospital Suitability Project | Tarek Yahia – GIS Portfolio</title>
        <meta
          name="description"
          content="GIS-based project to determine optimal hospital locations in El-Dabaa using spatial analysis, ArcGIS ModelBuilder, and urban planning data."
        />
        <meta property="og:title" content="Hospital Suitability | Tarek Yahia" />
        <meta
          property="og:description"
          content="Project using GIS and ModelBuilder to identify the most suitable hospital locations in El-Dabaa based on planning regulations and spatial constraints."
        />
        <meta property="og:url" content="https://tarekyahia.site/hospital-suitability" />
        <meta property="og:image" content="https://tarekyahia.site/preview.jpg" />
      </Helmet>

      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Project Details</h3>

            <Resumecontent
              title="Project Title"
              content={[
                "Hospital Suitability Analysis in El-Dabaa City Using GIS.",
              ]}
            />

            <Resumecontent
              title="Project Summary"
              content={[
                "This GIS-based project aimed to identify the most suitable areas for building a hospital in El-Dabaa City based on spatial and urban criteria.",
                "The suitability analysis was based on the following constraints:",
                "- A minimum of 30 meters from residential areas",
                "- At least 80 meters away from main roads",
                "- Located within medium- or high-density population zones (as per 2014 Planning Authority data)",
                "The analysis was conducted using ArcGIS and automated through ModelBuilder.",
              ]}
            />

            <Resumecontent
              title="My Role"
              content={[
                "Collected and georeferenced spatial and urban data.",
                "Built an automated suitability model using ArcGIS ModelBuilder.",
                "Applied buffer and overlay analysis based on planning rules.",
                "Created cartographic outputs and published them using ArcGIS Online.",
              ]}
            />

            <Resumecontent
              title="Project Focus"
              content={[
                "Healthcare facility site selection",
                "Urban planning and GIS integration",
                "Buffer, overlay, and reclassification analysis",
                "Web mapping and public presentation",
              ]}
            />

            <Resumecontent
              title="Programs / Tools Used"
              content={[
                "ArcGIS Desktop (ModelBuilder, Spatial Analyst)",
                "ArcGIS Online & Web AppBuilder",
                "USGS DEM and Egyptian Army topographic maps",
                "Planning Authority datasets (2014)",
              ]}
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Map Gallery</h3>
            <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
              {[{
                src: DH,
                alt: "Hospital Suitability Map",
                label: "Hospital Suitable Locations",
              }].map((map, i) => (
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

export default HospitalSuitability;
