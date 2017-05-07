import React, { Component } from 'react'
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'
import Controls from 'Controls'

class Countdown extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      countdownStatus: 'paused'
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ count: 0 });
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  }

  componentWillUnmount() { //Clears timer if you leave page
    clearInterval(this.timer)
    this.time = undefined
  }

  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count + 1

      this.setState({
        count: newCount >= 0 ? newCount : 0
      })
    }, 1000)
  }

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    })
  }

  handleStatusChange = (newStatus) => {
    this.setState({ countdownStatus: newStatus })
  }

  render() {
    let { count, countdownStatus } = this.state

    return (
      <div className="text-center">
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      </div>
    )
  }
}

export default Countdown