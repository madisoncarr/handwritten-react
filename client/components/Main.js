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
        justifyContent: 'space-around',
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <div>
          <h1>Handwritten</h1>
          <h6>a neural network made with the mnist data set and brain.js</h6>
        </div>
        <div
          style={{
            width: '60%',
            height: '50%',
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
          <div>
            <h6>Number Guessed</h6>
            <hr style={{color: 'black'}} />
            <h1 style={{fontSize: '60px'}}>
              {props.toNumber(props.numberGuessed) >= 0
                ? props.toNumber(props.numberGuessed)
                : ' '}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
