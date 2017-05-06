import React, { Component } from 'react'

class CountdownForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    let strSeconds = this.refs.seconds.value

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = ''
      this.props.onSetCountdown(parseInt(strSeconds, 10))
    }

  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds" value={this.state.value} onChange={this.handleChange} />
          <button className="button expanded" disabled={!this.state.value}>Start</button>
        </form>
      </div>
    )
  }
}

export default CountdownForm