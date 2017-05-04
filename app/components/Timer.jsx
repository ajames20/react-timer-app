import React, { Component } from 'react'
import Clock from 'Clock'

class Timer extends Component {
  render() {
    return (
      <div className="text-center">
        <Clock totalSeconds={615} />
      </div>
    )
  }
}

export default Timer