import mnist from 'mnist'
import brain from 'brain.js'
import learningData from './../trainedModel.json'
import React from 'react'
import {Navbar, ImageGenerator} from './components'

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
      <React.Fragment>
        <Navbar />
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
              backgroundColor: '#fbfbfb',
              height: 'auto',
              marginTop: '20%'
            }}
          >
            <div>
              <ImageGenerator
                handleNewRandomNumber={this.handleNewRandomNumber}
                canvasRef={this.canvasRef}
              />
            </div>
            <div>
              <h3>Number Guessed by Our Neural Network: </h3>
              <h1 style={{fontSize: '60px'}}>
                {this.toNumber(numberGuessed) >= 0
                  ? this.toNumber(numberGuessed)
                  : ' '}
              </h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
