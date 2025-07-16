import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/TarekYahia_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Helmet>
        <title>Resume | Tarek Yahia – GIS Analyst</title>
        <meta
          name="description"
          content="View the resume of Tarek Yahia, a GIS Analyst skilled in ArcGIS, QGIS, remote sensing, and urban planning."
        />
        <meta property="og:title" content="Resume | Tarek Yahia – GIS Analyst" />
        <meta
          property="og:description"
          content="Discover my professional background, GIS experience, skills, and education."
        />
        <meta property="og:url" content="https://tarekyahia.site/resume" />
      </Helmet>

      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="ESRI MOOCs"
              date="2023-2025"
              content={[
                "Imagery in Action",
                "GIS for Climate Action",
                "Make an Impact with Modern Geo Apps"
              ]}
            />
            <Resumecontent
              title="Volunteer [YLY - Youth Leading Youth]"
              date="2020"
              content={[
                "Part of the Social Media Team, contributing to content and campaigns."
              ]}
            />

            <h3 className="resume-title">Graduation Project</h3>
            <Resumecontent
              title="Smart Neighborhood Design using GIS"
              content={[
                "Designed a sustainable and tech-enabled neighborhood in New Damietta using GIS and urban planning tools.",
                "Performed spatial analysis and created high-quality maps to support urban development."
              ]}
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.A. in GIS, Land Surveying & Planning [Damietta University]"
              date="2020 – 2023"
              content={[
                "Graduated from the Faculty of Arts, majoring in GIS and Surveying.",
                "Focused on practical spatial problem-solving and geospatial technology applications."
              ]}
            />

            <h3 className="resume-title">Technical Skills</h3>
            <Resumecontent
              title=""
              content={[
                "ArcGIS Desktop, ArcGIS Pro, ArcGIS Online, QGIS",
                "Remote Sensing with ENVI",
                "AutoCAD, CityEngine",
                "Google Earth Pro, MS Office Suite"
              ]}
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
