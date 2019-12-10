import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListItem} from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('shows expense list item component', ()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});