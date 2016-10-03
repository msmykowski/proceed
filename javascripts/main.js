const React = require('react');

class Application extends React.Component {
  render() {
    return (
      <div>Hello World</div>
    );
  }
}

module.exports = Application;

const renderIntoDom = require('./render');
renderIntoDom(Application);

