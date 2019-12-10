import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import Enzyme, { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

// test('should render header correctly', ()=>{
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

test('should render header correctly', ()=>{
    const wrapper = shallow(<Header />);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(toJSON(wrapper)).toMatchSnapshot();
});
