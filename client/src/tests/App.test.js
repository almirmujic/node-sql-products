import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const wrapper = shallow(<App />);

const testRender = (dataTestTag) => {
  const dataTestItem = wrapper.find(dataTestTag)
  expect(dataTestItem.length).toBe(1);
}

describe('<App />', () => {
  it('renders', () => {
    expect(wrapper).toBeTruthy();
  })
  it('renders a ul', () => {
    const ul = <ul></ul>;
    expect(wrapper.contains(ul)).toEqual(true);
  })
  it('renders a form', () => {
    testRender(`[data-test='Form']`);
  })
  it('renders item input', () => {
    testRender(`[data-type='item-input']`);
  })
  it('renders price input', () => {
    testRender(`[data-type='price-input']`);
  })
  console.log(wrapper.debug())
})