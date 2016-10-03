require('jasmine_dom_matchers');

let preservedGlobalState;
beforeAll(() => {
  preservedGlobalState = global;
  const globals = {
    React: require('react'),
    ReactDOM: require('react-dom'),
    $: require('jquery')
  };

  Object.keys(globals).forEach((glob) => global[glob] = globals[glob]);
  spyOn(require('../app/javascripts/renderIntoDom'), 'renderIntoDom');  
});

afterAll(() => {
  global = preservedGlobalState;
});

beforeEach(() => {
  $('body').find('#root').remove().end().append('<div id="root"/>');
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(root);
});