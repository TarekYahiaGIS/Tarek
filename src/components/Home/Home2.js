import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "var(--text-color)" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ color: "var(--text-color)" }}>
              I'm passionate about <b className="purple">GIS, remote sensing, and land surveying</b>.
              I enjoy using geospatial data to solve real-world challenges and make smarter urban, environmental, and planning decisions.
              <br />
              <br />
              I'm experienced with tools like
              <i>
                <b className="purple"> ArcGIS, QGIS, AutoCAD, CityEngine, Google Earth Pro, and ENVI.</b>
              </i>
              <br />
              <br />
              My interests lie in:
              <i>
                <b className="purple"> Spatial analysis</b>, <b className="purple">smart city planning</b>, and creating effective maps & dashboards using
                modern GIS platforms.
              </i>
              <br />
              <br />
              I'm always looking to grow and learn, whether it's improving my technical mapping skills or exploring how GIS intersects with <b className="purple">data analysis and web mapping.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ color: "var(--text-color)" }}>FIND ME ON</h1>
           <ul className="home-about-social-links">
  <li className="social-icons">
    <a
      href="https://github.com/TarekYahiaGIS"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiFillGithub />
    </a>
  </li>

  <li className="social-icons">
    <a
      href="https://www.linkedin.com/in/tarek-yahia-453608242"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <FaLinkedinIn />
    </a>
  </li>

  <li className="social-icons">
    <a
      href="mailto:tarekyahiagis@gmail.com"
      className="icon-colour home-social-icons"
      title="Email me"
    >
      <MdEmail />
    </a>
  </li>
</ul>
         </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;