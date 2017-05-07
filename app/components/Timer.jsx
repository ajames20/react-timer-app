import React, { Component } from 'react'
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'
import Controls from 'Controls'

class Countdown extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      timerStatus: 'stopped'
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
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
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds,
      timerStatus: 'started'
    })
  }

  handleStatusChange = (newStatus) => {
    this.setState({ timerStatus: newStatus })
  }

  render() {
    let { count, timerStatus } = this.state

    return (
      <div className="text-center">
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    )
  }
}

export default Countdown