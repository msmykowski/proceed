const React = require('react');

class Main extends React.Component {
  render() {
    const helloWorld = "hello world";
    return (<div>{helloWorld}</div>);
  }
}

module.exports = Main;

require('./initialize').initialize(Main);