import React from 'react'

const ImageGenerator = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
    >
      <canvas
        id="myCanvas"
        ref={props.canvasRef}
        width={150}
        height={170}
        style={{
          marginTop: '2.5vh',
          marginLeft: '1.5vw',
          marginBottom: '1.2rem',
          backgroundColor: 'black'
        }}
      />
      <button
        className="number-generator-button"
        type="button"
        onClick={props.handleNewRandomNumber}
        style={{
          fontSize: '0.5rem',
          height: '2.7rem',
          padding: '0.7rem 0.5rem 0.7rem',
          marginLeft: '1.5vw'
        }}
      >
        Generate Random Number
      </button>
    </div>
  )
}

export default ImageGenerator
