import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboaerPage from '../../components/ExpenseDashboardPage';

test('should render ExpenseDashboard Page correctly', ()=>{
    const wrapper = shallow(<ExpenseDashboaerPage />);
    expect(wrapper).toMatchSnapshot();
});