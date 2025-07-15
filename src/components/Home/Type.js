import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'A GIS Analyst',
          'A Remote Sensing Specialist',
          'A Cartographer',
          'A Spatial Data Visualizer',
          'A QGIS User',
          'An ArcGIS User',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
