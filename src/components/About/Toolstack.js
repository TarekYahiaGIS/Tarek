import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiQgis,
  SiMicrosoftoffice,
  SiAutodesk,
  SiGoogleearthengine,
  SiArcgis,
} from "react-icons/si";
import { FaSatellite, FaGlobe } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiArcgis />
        <div className="tech-label">ArcGIS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiQgis />
        <div className="tech-label">QGIS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSatellite />
        <div className="tech-label">ENVI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAutodesk />
        <div className="tech-label">AutoCAD</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleearthengine />
        <div className="tech-label">Google Earth</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
        <div className="tech-label">MS Office</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGlobe />
        <div className="tech-label">Web GIS</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
