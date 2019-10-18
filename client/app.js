import mnist from 'mnist'
import brain from 'brain.js'
import learningData from './../trainedModel.json'
import React from 'react'
import {Navbar, Main} from './components'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      image: [],
      predictionsOpen: false
    }
    this.canvasRef = React.createRef()
    this.toNumber = this.toNumber.bind(this)
    this.randomNumberGenerator = this.randomNumberGenerator.bind(this)
    this.handleNewRandomNumber = this.handleNewRandomNumber.bind(this)
    this.handlePredictionOpen = this.handlePredictionOpen.bind(this)
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

  handlePredictionOpen() {
    console.log('predictionsOpen: ', this.state.predictionsOpen)
    if (this.state.predictionsOpen) {
      this.setState({predictionsOpen: false})
    } else {
      this.setState({predictionsOpen: true})
    }
  }

  componentDidMount() {
    const ctx = this.canvasRef.current.getContext('2d')
    ctx.fillRect(0, 0, 100, 100)
  }
  componentDidUpdate(prevProps, prevState) {
    const ctx = this.canvasRef.current.getContext('2d')
    if (prevState.image !== this.state.image) {
      mnist.draw(this.state.image, ctx, 55, 75)
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
        <Navbar
          handlePredictionOpen={this.handlePredictionOpen}
          predictionsOpen={this.state.predictionsOpen}
        />
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
