import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "../Resume/ResumeContent";
import DH from "../../Assets/Projects/DH.jpg";
import "../../style.css";
import ReactGA from "react-ga";

function HospitalSuitability() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="resume-section">
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
                "This GIS-based project aimed to determine the most suitable areas to build a hospital in El-Dabaa City based on spatial and urban criteria.",
                "The suitability was assessed using the following constraints:",
                "- Minimum 30 meters distance from residential areas",
                "- Minimum 80 meters away from main roads",
                "- Located in medium or high-density population zones (based on 2014 data from the Planning Authority)",
                "The project was implemented using ArcGIS tools and automated with ModelBuilder.",
              ]}
            />

            <Resumecontent
              title="My Role"
              content={[
                "Collected and georeferenced urban data including roads, buildings, and density zones.",
                "Used ArcGIS ModelBuilder to automate buffer and overlay analysis.",
                "Designed and implemented a suitability model considering planning regulations.",
                "Created cartographic outputs and a web app using ArcGIS Online.",
              ]}
            />

            <Resumecontent
              title="Project Focus"
              content={[
                "Health facility site selection",
                "Urban planning and GIS integration",
                "Buffer, overlay, and reclassification tools",
                "Web mapping and public data presentation",
              ]}
            />

            <Resumecontent
              title="Programs / Tools Used"
              content={[
                "ArcGIS Desktop (ModelBuilder, Spatial Analyst)",
                "ArcGIS Online & Web AppBuilder",
                "USGS DEM & Egyptian Army topographic maps",
                "Planning Authority datasets (2014)",
              ]}
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Map Gallery</h3>
            <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
              {[
                {
                  src: DH,
                  alt: "Hospital Suitability Map",
                  label: "Hospital Suitable Locations",
                },
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

export default HospitalSuitability;
