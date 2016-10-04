const React = require('react');
const ReactDOM = require('react-dom');
const config = require('../config');

module.exports = {
  initialize(Component, props={}) {
    global.config = {};
    Object.keys(config).forEach(c => global.config[c] = config[c]);

    require("../stylesheets/application.css");
    
    ReactDOM.render(<Component {...props}/>, root);
  }
};