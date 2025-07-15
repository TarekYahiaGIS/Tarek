import React from 'react'
import { Row } from 'react-bootstrap'

function Github() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
        Days I <strong className="purple">Code or Map</strong>
      </h1>
      {/* GitHubCalendar removed */}
      <p style={{ color: '#aaa', textAlign: 'center' }}>
        GitHub activity display is temporarily disabled.
      </p>
    </Row>
  )
}

export default Github
