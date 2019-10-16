import mnist from 'mnist'
import brain from 'brain.js'
import learningData from './../trainedModel.json'
import React from 'react'
import {Navbar, Main} from './components'

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
    ctx.fillRect(0, 0, 100, 100)
  }
  componentDidUpdate(prevProps, prevState) {
    const ctx = this.canvasRef.current.getContext('2d')
    if (prevState.image !== this.state.image) {
      mnist.draw(this.state.image, ctx, 50, 50)
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
      <div
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
      >
        <Navbar />
        <Main
          handleNewRandomNumber={this.handleNewRandomNumber}
          canvasRef={this.canvasRef}
          toNumber={this.toNumber}
          numberGuessed={numberGuessed}
        />
      </div>
    )
  }
}

export default App
