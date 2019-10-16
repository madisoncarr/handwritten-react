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
          backgroundColor: 'black'
        }}
      />
      <button
        className="number-generator-button"
        type="button"
        onClick={props.handleNewRandomNumber}
        style={{
          fontSize: '0.5rem',
          height: '1.5rem',
          padding: '0 0.45rem',
          marginLeft: '1.5vw'
        }}
      >
        Generate Random Number
      </button>
    </div>
  )
}

export default ImageGenerator
