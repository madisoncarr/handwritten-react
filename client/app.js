import mnist from 'mnist'
import brain from 'brain.js'
import learningData from '/Users/cynicalbrunette/Documents/projects/fullstack_immersive/fullstack_sr/handwritten/trainedModel.json'
import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      image: [],
      mnistImage: ''
    }
    this.canvasRef = React.createRef()
    this.toNumber = this.toNumber.bind(this)
    this.randomNumberGenerator = this.randomNumberGenerator.bind(this)
  }

  //   const digit = mnist[1].get();
  // var context = document.getElementById('myCanvas').getContext('2d');

  // mnist.draw(digit, context); // draws a '1' mnist digit in the canvas

  randomNumberGenerator() {
    return Math.floor(Math.random() * Math.floor(10))
  }

  componentDidMount() {
    const ctx = this.canvasRef.current.getContext('2d')
    ctx.fillRect(0, 0, 200, 200)
    const randomNumber = this.randomNumberGenerator()
    const digit = mnist[randomNumber].get()
    this.setState({image: digit})
  }
  componentDidUpdate(prevProps, prevState) {
    const ctx = this.canvasRef.current.getContext('2d')
    if (prevState.image !== this.state.image) {
      mnist.draw(this.state.image, ctx, 100, 100)
    }
  }

  toNumber(arr) {
    let maxIndex = arr.indexOf(Math.max(...arr))
    return maxIndex
  }
  render() {
    const net = new brain.NeuralNetwork()
    net.fromJSON(learningData)
    console.log(net.run(this.state.image))
    return (
      <div>
        <Navbar />
        <canvas
          id="myCanvas"
          ref={this.canvasRef}
          width={200}
          height={200}
          style={{border: 'solid black 1px'}}
        />
        <h3>{this.toNumber(net.run(this.state.image))}</h3>
        <button type="button"> </button>
        <Routes />
      </div>
    )
  }
}

export default App
