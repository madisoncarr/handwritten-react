import React from 'react'
import ImageGenerator from './ImageGenerator'

const Main = props => {
  return (
    <div
      style={{
        width: '95%',
        height: '90vh',
        backgroundColor: '#ebc1c0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)'
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start'
          }}
        >
          <div style={{marginRight: '10rem', paddingBottom: '4rem'}}>
            <h1
              style={{
                textTransform: 'uppercase',
                paddingBottom: '0.4rem',
                borderBottom: 'solid 1px black'
              }}
            >
              Handwritten
            </h1>
            <h6 style={{paddingTop: '1rem'}}>
              a neural network made with the mnist data set and brain.js
            </h6>
          </div>
          <div
            style={{
              width: '40rem',
              height: '25.5rem',
              backgroundColor: '#fbfbfb',
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}
          >
            <ImageGenerator
              handleNewRandomNumber={props.handleNewRandomNumber}
              canvasRef={props.canvasRef}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: '3.5rem',
                marginTop: '1.5rem'
              }}
            >
              <h6
                style={{
                  fontSize: '1.2rem',
                  textTransform: 'uppercase',
                  paddingBottom: '0.8rem',
                  borderBottom: 'solid black 1px'
                }}
              >
                Number Guessed
              </h6>
              <h1 style={{fontSize: '7rem', marginTop: '2.5rem'}}>
                {props.toNumber(props.numberGuessed) >= 0
                  ? props.toNumber(props.numberGuessed)
                  : ' '}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
