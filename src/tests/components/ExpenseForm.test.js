import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

//we need to mock the moment lib

test('should render ExpenseForm w//o data', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const value = 'New Description';
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const value = 'New note value';
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});

test('shoud set amount if valid input', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const amount = "16.99";
    wrapper.find('input').at(1).simulate('change', {
        target: {value: amount}
    });
    expect(wrapper.state('amount')).toBe(amount);
});

test('shoud not set amount if INvalid input', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const amount = "1.1199";
    wrapper.find('input').at(1).simulate('change', {
        target: {value: amount}
    });
    expect(wrapper.state('amount')).toBe('');
});

//NOT WORKING
test('should call onsubmit prop for valid form submission', ()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    const container = wrapper.find('form');
    container.simulate('submit', {
        preventDefault: ()=>{}
    });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expect.objectContaining({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt
    }));
    // onSubmitSpy("Andrew", 'NYC');
    // expect(onSubmitSpy).toHaveBeenCalledWith('Andrew', 'NYC');
});

test('should set new date on date change', ()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should focus in the calendar', ()=>{
    const focused= true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toEqual(focused);
});

