import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {DateRangePicker} from 'react-dates';
import {filters, altFilters} from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByAmount= jest.fn();
    sortByDate = jest.fn();
    wrapper = shallow(
                <ExpenseListFilters 
                    filters = {filters}
                    setTextFilter = {setTextFilter}
                    sortByDate = {sortByDate}
                    sortByAmount = {sortByAmount}
                    setEndDate = {setEndDate}
                    setStartDate = {setStartDate}
                />);
});

test('should render ExpenseListFilters component', ()=>{
    expect(wrapper).toMatchSnapshot();
});
test('should render ExpenseListFilters component with alt data', ()=>{
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', ()=>{
    const text = 'ala ma kota';
    wrapper.find('input').simulate('change', {
        target: {value: text}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(text);
    
});

test('should sort by date', ()=>{
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: {value: 'date'}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', ()=>{
    wrapper.find('select').simulate('change', {
        target: {value: 'amount'}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', ()=>{
    wrapper.find(DateRangePicker).prop('onDatesChange')({startDate:altFilters.startDate, endDate:altFilters.endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle date focus changes', ()=>{
    const focused = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(focused);
    expect(wrapper.state("calendarFocused")).toBe(focused);
});