require('./spec_helper');

describe('Main', () => {
  beforeEach(() => {
    const Main = require('../app/javascripts/main');
    ReactDOM.render(<Main/>, root);
  });

  it('renders hello world', () => {
    expect('#root').toContainText('hello world');
  });
});