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
import { Helmet } from "react-helmet";

function LakeChangeDetection() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Helmet>
        <title>Manzala Lake Change Detection Project | Tarek Yahia – GIS Portfolio</title>
        <meta
          name="description"
          content="Remote sensing project using Landsat data and ENVI to detect environmental changes in Manzala Lake between 1991–2021."
        />
        <meta property="og:title" content="Manzala Lake Change Detection | Tarek Yahia" />
        <meta
          property="og:description"
          content="Time-series analysis of Manzala Lake using remote sensing to study lake shrinkage and human impact (1991–2021)."
        />
        <meta property="og:url" content="https://tarekyahia.site/lake-change-detection" />
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
                "Environmental Change Detection in Manzala Lake Using Multi-Temporal Landsat Imagery (1991–2021)."
              ]}
            />

            <Resumecontent
              title="Project Summary"
              content={[
                "This solo project aimed to detect environmental changes in Manzala Lake using Landsat 5 and 7 imagery spanning from 1991 to 2021.",
                "The 'Image Change Workflow' tool in ENVI was used to assess how roads and drainage channels impacted the lake's shape and area.",
                "From 1991–2001: a 15.4% reduction in lake area, with a slight 1% gain in other regions.",
                "From 2011–2021: a 14.7% decrease in area, with negligible gains (~0.1%).",
                "The changes were primarily influenced by infrastructure expansion—particularly the Damietta–Port Said road—and surrounding hydrological activity."
              ]}
            />

            <Resumecontent
              title="Project Focus"
              content={[
                "Remote sensing and change detection",
                "Time-series environmental monitoring",
                "Lake morphology and shrinkage analysis",
                "ENVI workflows and geospatial interpretation"
              ]}
            />

            <Resumecontent
              title="Programs and Tools Used"
              content={[
                "ENVI (Image Change Workflow Tool)",
                "Landsat 5 & 7 imagery from USGS EarthExplorer",
                "Microsoft Excel (for tabulation and charts)"
              ]}
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Map Gallery</h3>

            <h5 className="resume-title">Landsat Imagery Timeline</h5>
            <Row style={{ justifyContent: "center", paddingTop: "10px" }}>
              {[L1991, L2001, L2011, L2021].map((img, i) => (
                <Col key={i} md={6} sm={12} className="image-gallery">
                  <div className="map-hover compact-map">
                    <a href={img} target="_blank" rel="noopener noreferrer">
                      <img
                        src={img}
                        alt={`Manzala Lake - ${1991 + i * 10}`}
                        className="img-fluid rounded map-img"
                      />
                    </a>
                    <div className="overlay">{`Manzala Lake - ${1991 + i * 10}`}</div>
                  </div>
                </Col>
              ))}
            </Row>

            <h5 className="resume-title" style={{ marginTop: "30px" }}>
              Change Detection Results
            </h5>
            <Row style={{ justifyContent: "center", paddingTop: "10px" }}>
              {[C1991, CH1991, C2021, CH2021].map((img, i) => (
                <Col key={i} md={6} sm={12} className="image-gallery">
                  <div className="map-hover compact-map">
                    <a href={img} target="_blank" rel="noopener noreferrer">
                      <img
                        src={img}
                        alt={`Change Map ${i + 1}`}
                        className="img-fluid rounded map-img"
                      />
                    </a>
                    <div className="overlay">
                      {[
                        "Change in Manzala Lake (1991–2001)",
                        "Area Change Chart (1991–2001)",
                        "Change in Manzala Lake (2011–2021)",
                        "Area Change Chart (2011–2021)"
                      ][i]}
                    </div>
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
