const React = require('react');

const routes = {'/': 'root'};

class Router extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {Page: null};
  }

  componentDidMount() {
    const {router} = this.props;
    Object.keys(routes).map((path) => {
      const cb = routes[path];
      router.get(path, this[cb]);
    });
  }

  root() {
    console.log('here');
  }

  render() {
    const {Page} = this.state;
    
    if (!Page) return null;
    
    return (
      <Page {...this.props}/>
    );
  }
}

module.exports = Router;