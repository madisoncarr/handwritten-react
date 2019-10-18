import React from 'react'

const Navbar = props => (
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
    <div
      id="dropdown"
      style={{
        marginLeft: '5%',
        marginRight: '5%',
        textTransform: 'uppercase',
        fontSize: '1.2rem',
        paddingTop: '1%'
      }}
      onClick={() => props.handlePredictionOpen(this)}
    >
      Confidence Predictions
      <ul>
        <li>Stuff</li>
        <li>Stuff</li>
        <li>Stuff</li>
      </ul>
    </div>
    <a
      style={{textTransform: 'uppercase', fontSize: '1.2rem', paddingTop: '1%'}}
    >
      About
    </a>
  </div>
)

export default Navbar
