import React from 'react'

const Navbar = () => (
  <div
    style={{
      width: '100%',
      height: '3rem',
      backgroundColor: '#fbfbfb',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-end'
    }}
  >
    <a
      style={{
        marginLeft: '5%',
        marginRight: '5%',
        textTransform: 'uppercase'
      }}
    >
      Confidence Predictions
    </a>
    <a style={{textTransform: 'uppercase'}}>About</a>
  </div>
)

export default Navbar
