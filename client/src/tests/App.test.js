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

describe('<App />', () => {
  it('renders', () => {
    expect(wrapper).toBeTruthy();
  })
  it('renders a ul', () => {
    const ul = <ul></ul>;
    expect(wrapper.contains(ul)).toEqual(true);
  })
  it('renders a form', () => {
    const form = wrapper.find(`[data-test='Form']`);
    expect(form.length).toBe(1);
  })
  it('renders item input', () => {
    const input = wrapper.find(`[data-type='item-input']`);
    expect(input.length).toBe(1);
  })
  it('renders price input', () => {
    const input = wrapper.find(`[data-type='price-input']`);
    expect(input.length).toBe(1);
  })
  console.log(wrapper.debug())
})