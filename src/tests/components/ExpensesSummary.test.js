import React from 'react';
import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should render ExpensesSummary component corretly if there are some expenses', ()=>{
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary component corretly if there are some expenses', ()=>{
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>);
    expect(wrapper).toMatchSnapshot();
});