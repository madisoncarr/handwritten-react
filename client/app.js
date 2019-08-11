import mnist from 'mnist'
import brain from 'brain.js'
import learningData from '/Users/cynicalbrunette/Documents/projects/fullstack_immersive/fullstack_sr/handwritten/trainedModel.json'
import React from 'react'

import {Navbar} from './components'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      image: []
    }
    this.canvasRef = React.createRef()
    this.toNumber = this.toNumber.bind(this)
    this.randomNumberGenerator = this.randomNumberGenerator.bind(this)
    this.handleNewRandomNumber = this.handleNewRandomNumber.bind(this)
  }

  randomNumberGenerator() {
    return Math.floor(Math.random() * Math.floor(10))
  }

  handleNewRandomNumber() {
    const randomNumber = this.randomNumberGenerator()
    console.log('correct number: ', randomNumber)
    const digit = mnist[randomNumber].get()
    this.setState({image: digit})
  }

  componentDidMount() {
    const ctx = this.canvasRef.current.getContext('2d')
    ctx.fillRect(0, 0, 200, 200)
  }
  componentDidUpdate(prevProps, prevState) {
    const ctx = this.canvasRef.current.getContext('2d')
    if (prevState.image !== this.state.image) {
      mnist.draw(this.state.image, ctx, 86, 86)
    }
  }

  toNumber(arr) {
    let maxIndex = arr.indexOf(Math.max(...arr))
    return maxIndex
  }
  render() {
    const net = new brain.NeuralNetwork()
    net.fromJSON(learningData)
    const numberGuessed = net.run(this.state.image)
    console.log('Number guessed: ', this.toNumber(numberGuessed), numberGuessed)
    return (
      <>
        <Navbar />
        <div style={{display: 'flex', justifyContent: 'space between'}}>
          <div
            style={{
              marginLeft: '10rem',
              textAlign: 'center',
              marginTop: '5rem'
            }}
          >
            <h3>Random Image Generated: </h3>
            <canvas
              id="myCanvas"
              ref={this.canvasRef}
              width={200}
              height={200}
              style={{border: 'solid black 1px', borderRadius: '15px'}}
            />
            <button
              className="number-generator-button"
              type="button"
              onClick={this.handleNewRandomNumber}
            >
              Generate Random Number
            </button>
          </div>
          <div
            style={{
              marginRight: '10rem',
              marginLeft: '10rem',
              textAlign: 'center',
              marginTop: '5rem'
            }}
          >
            <h3>Number Guessed by Our Brain (aka Jimmy Newtron): </h3>
            <h1 style={{fontSize: '60px'}}>
              {this.toNumber(numberGuessed) >= 0
                ? this.toNumber(numberGuessed)
                : ' '}
            </h1>
          </div>
        </div>
      </>
    )
  }
}

export default App
