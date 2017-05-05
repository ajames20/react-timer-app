import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'

let TestUtils = require('react-addons-test-utils')
let $ = require('jQuery')

import Controls from 'Controls'

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  })

  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Start)');

      expect($pauseButton.length).toBe(1);
    });

  });
})