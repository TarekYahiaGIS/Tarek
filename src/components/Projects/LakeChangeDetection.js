import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "../Resume/ResumeContent";
import L1991 from "../../Assets/Projects/L1991.png";
import L2001 from "../../Assets/Projects/L2001.png";
import L2011 from "../../Assets/Projects/L2011.png";
import L2021 from "../../Assets/Projects/L2021.png";
import C1991 from "../../Assets/Projects/C1991.png";
import CH1991 from "../../Assets/Projects/CH1991.png";
import CH2021 from "../../Assets/Projects/CH2021.png";
import C2021 from "../../Assets/Projects/C2021.png";
import "../../style.css";
import ReactGA from "react-ga";

function LakeChangeDetection() {
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
                "Environmental Change Detection in Manzala Lake Using Multi-Temporal Landsat Imagery (1991–2021).",
              ]}
            />

            <Resumecontent
              title="Project Summary"
              content={[
                "This solo project focused on detecting environmental changes in Manzala Lake using Landsat 5 and Landsat 7 imagery from 1991 to 2021.",
                "The ENVI 'Image Change Workflow' tool was used to assess how roads and water channels impacted the lake’s shape and area over time.",
                "From 1991 to 2001: a 15.4% decrease in lake area, with only a 1% increase in some parts.",
                "From 2011 to 2021: a 14.7% decrease, with just 0.1% increase.",
                "Notable factors included nearby infrastructure like the Damietta–Port Said road and rising lake levels that sometimes eroded road edges.",
              ]}
            />

            <Resumecontent
              title="Project Focus"
              content={[
                "Remote sensing change detection",
                "Time-series analysis of lake shrinkage",
                "Impact of infrastructure on natural water bodies",
                "Using ENVI for environmental monitoring",
              ]}
            />

            <Resumecontent
              title="Programs and Tools Used"
              content={[
                "ENVI (Image Change Workflow Tool)",
                "Landsat 5 & 7 Imagery from USGS",
                "Excel (for chart creation and comparison)",
              ]}
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Map Gallery</h3>

            <h5 className="resume-title">Landsat Imagery Timeline</h5>
            <Row style={{ justifyContent: "center", paddingTop: "10px" }}>
              {[
                { src: L1991, alt: "Landsat 1991", label: "Manzala Lake - 1991" },
                { src: L2001, alt: "Landsat 2001", label: "Manzala Lake - 2001" },
                { src: L2011, alt: "Landsat 2011", label: "Manzala Lake - 2011" },
                { src: L2021, alt: "Landsat 2021", label: "Manzala Lake - 2021" },
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

            <h5 className="resume-title" style={{ marginTop: "30px" }}>
              Change Detection Results
            </h5>
            <Row style={{ justifyContent: "center", paddingTop: "10px" }}>
              {[
                {
                  src: C1991,
                  alt: "Change 1991–2001",
                  label: "Change in Manzala Lake (1991–2001)",
                },
                {
                  src: CH1991,
                  alt: "Chart 1991–2001",
                  label: "Change Chart for Manzala Lake (1991–2001)",
                },
                {
                  src: C2021,
                  alt: "Change 2011–2021",
                  label: "Change in Manzala Lake (2011–2021)",
                },
                {
                  src: CH2021,
                  alt: "Chart 2011–2021",
                  label: "Change Chart for Manzala Lake (2011–2021)",
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

export default LakeChangeDetection;
