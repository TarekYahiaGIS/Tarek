import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <Container fluid className="footer">
      <Row>
 <Col md="4" className="footer-copywright">
          <h3>Tarek Yahia © {year}</h3>
                 </Col>
        <Col md="4" className="footer-copywright">        
  <Link to="/attribution" style={{ fontSize: '0.85rem', color: '#aaa' }}>
            Attribution
          </Link>
        </Col>
               <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/TarekYahiaGIS"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/tarek-yahia1911"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
<li className="social-icons">
  <a
    href="mailto:tarekyahia.dev@gmail.com"
    style={{ color: 'white' }}
    target="_blank"
    rel="noopener noreferrer"
    title="Email me"
  >
    <MdEmail />
  </a>
</li>

          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
