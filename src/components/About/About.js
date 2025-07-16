import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

function About() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="about-section">
      <Helmet>
        <title>About Me | Tarek Yahia – GIS Analyst</title>
        <meta
          name="description"
          content="Learn more about Tarek Yahia – a GIS Analyst passionate about mapping, smart cities, and geospatial technology."
        />
        <meta property="og:title" content="About | Tarek Yahia – GIS Analyst" />
        <meta
          property="og:description"
          content="Discover the background and tools of Tarek Yahia, GIS and Remote Sensing specialist."
        />
        <meta property="og:url" content="https://tarekyahia.site/about" />
      </Helmet>

      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Programs</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
