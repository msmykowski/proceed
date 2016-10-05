const React = require('react');
const {useStore} = require('p-flux');

const {withRouter, initialize} = require('./setup');

function Main ({store}) {
  return <div>{store.helloWorld}</div>;
}

const MainWithStore = useStore(withRouter(Main), {
    store: require('./store'),
    dispatcherHandlers: []
  });

initialize(MainWithStore);

module.exports = MainWithStore;