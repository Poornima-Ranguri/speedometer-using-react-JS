import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="home">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="parag">Speed is {count}mph</h1>
        <p className="paargraph">Min limit is 0mph, Max limit is 200mph</p>
        <div className="btn-container">
          <button
            type="button"
            className="accelerate-btn"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="brake-btn"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
