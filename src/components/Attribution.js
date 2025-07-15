import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import ReactGA from "react-ga";

function Attribution() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              color: "var(--text-color)",
              textAlign: "justify",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Attributions</strong>
            </h1>

            <p>
              This portfolio was inspired by open-source projects shared by the
              developer community on GitHub. Special thanks to those creators who
              contribute their work to help others grow and learn.
            </p>

            <p>
              The illustrations used throughout the site were generated using{" "}
              <strong className="purple">ChatGPT</strong>'s image generation
              tools, including the logo and visual elements.
            </p>

            <p>
              The preloader animation is a customized SVG design sourced from{" "}
              <a
                href="https://icons8.com/preloaders"
                className="purple"
                target="_blank"
                rel="noopener noreferrer"
              >
                Icons8 Preloaders
              </a>{" "}
              — used under their free license with proper attribution.
            </p>

            <p>
              If you are one of the contributors or creators of referenced works
              and need additional credit or a link, feel free to{" "}
              <a
                href="mailto:tarekyahiagis@gmail.com"
                className="purple"
                style={{ textDecoration: "underline" }}
              >
                contact me
              </a>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Attribution;
