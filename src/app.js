'use strict'

var React = require('react')
var createReactClass = require('create-react-class');

var Title = createReactClass({
	render: function(){
		React.createElement('h1', null, 'Título')
	}
})

module.exports = Title