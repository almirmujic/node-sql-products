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
    wrapper;
  })
  it('renders a ul', () => {
    const ul = <ul></ul>;
    expect(wrapper.contains(ul)).toEqual(true);
  })
})