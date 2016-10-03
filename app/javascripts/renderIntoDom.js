const React = require('react');
const ReactDOM = require('react-dom');

module.exports = function renderIntoDom(Component, props={}) {
  require("../stylesheets/application.css");
  ReactDOM.render(<Component {...props}/>, root)
}