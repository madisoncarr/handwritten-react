import React from 'react'

const Navbar = () => (
  <div
    style={{
      width: '100%',
      height: '3rem',
      backgroundColor: '#fbfbfb',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}
  >
    <a
      style={{
        marginLeft: '5%',
        marginRight: '5%',
        textTransform: 'uppercase',
        fontSize: '1.2rem',
        paddingTop: '1%'
      }}
    >
      Confidence Predictions
    </a>
    <a
      style={{textTransform: 'uppercase', fontSize: '1.2rem', paddingTop: '1%'}}
    >
      About
    </a>
  </div>
)

export default Navbar
