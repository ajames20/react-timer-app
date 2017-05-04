import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'

let TestUtils = require('react-addons-test-utils')
let $ = require('jQuery')

import CountdownForm from 'CountdownForm'

describe('CountdownForm', () => {
  it('should exisit', () => {
    expect(CountdownForm).toExist();
  })

  it('should call onSetCountdown if valid seconds entered', () => {
    let spy = expect.createSpy();
    let countdownFrom = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />)
    let $el = $(ReactDOM.findDOMNode(countdownFrom))

    countdownFrom.refs.seconds.value = '109'
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(109)
  })

  it('should not call onSetCountdown if invalid seconds entered', () => {
    let spy = expect.createSpy();
    let countdownFrom = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />)
    let $el = $(ReactDOM.findDOMNode(countdownFrom))

    countdownFrom.refs.seconds.value = 'a'
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })

})