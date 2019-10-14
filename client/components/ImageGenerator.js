import React from 'react'

const ImageGenerator = props => {
  return (
    <div
      style={{
        marginLeft: '10rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#72796c'
      }}
    >
      <button
        className="number-generator-button"
        type="button"
        onClick={props.handleNewRandomNumber}
      >
        Generate Random Number
      </button>
      <canvas id="myCanvas" ref={props.canvasRef} width={100} height={100} />
    </div>
  )
}

export default ImageGenerator
