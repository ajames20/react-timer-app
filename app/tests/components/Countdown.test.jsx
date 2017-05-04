import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'

let TestUtils = require('react-addons-test-utils')
let $ = require('jQuery')

import Countdown from 'Countdown'

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  })

  describe('handleSetCountdown', () => {
    it('should set the state started and countdown', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />)
      countdown.handleSetCountdown(10)

      expect(countdown.state.count).toBe(10)
      expect(countdown.state.countdownStatus).toBe('started')

      setTimeout(() => {
        expect(countdown.state.count).toBe(9)
        done()
      }, 1001)
    })

    it('should stop counting when it reaches zero', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown />)
      countdown.handleSetCountdown(1)

      setTimeout(() => {
        expect(countdown.state.count).toBe(0)
        done()
      }, 3001)
    })

  })
})