import React, { Component } from 'react'
import Clock from 'Clock'
import Controls from 'Controls'

class Timer extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
  }

  render() {
    let { count, countdownStatus } = this.state
    let renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />;
      }
    }
    return (
      <div className="text-center">
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    )
  }
}

export default Timer