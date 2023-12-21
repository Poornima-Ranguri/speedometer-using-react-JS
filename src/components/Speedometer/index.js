import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="home">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />

        <h1 className="heading">
          Speed is <span className="count">{speed}</span>mph
        </h1>

        <p className="para">Min limit is 0mph, Max limit is 200mph</p>

        <div className="btns-container">
          <button
            type="button"
            className="accelerate-btn"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className="apply-brakes" onClick={this.onBrake}>
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
