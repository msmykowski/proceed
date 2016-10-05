const React = require('react');
const ReactDOM = require('react-dom');
const config = require('../config/config');

module.exports = {
  withRouter(Component) {
    const Router = require('./components/router');    
    const Grapnel = require('grapnel');

    return function(props) {
      const router = new Grapnel({pushState : true});
      global.routeTo = router.navigate.bind(router);

      return (
        <div>
          <Component {...props}/>
          <Router {...{router}} {...props}/>
        </div>
      );
    }
  },

  initialize(Component) {
    require("../stylesheets/application.css");
    
    global.config = {};
    Object.keys(config).forEach(c => global.config[c] = config[c]);
    
    ReactDOM.render(<Component/>, root);
  }
};