const React = require('react');
const ReactDOM = require('react-dom');

module.exports = {
  renderIntoDom(Component, props={}) {
    require("../stylesheets/application.css");
    ReactDOM.render(<Component {...props}/>, root)
  }
}