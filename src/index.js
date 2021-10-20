'use strict'

var React = require('react')
var ReactDOM = require('react-dom')

var Title = require('./app')

reactDOM.render(
	React.createElement(Title),
	document.querySelector('[data-js="app"]')
)
