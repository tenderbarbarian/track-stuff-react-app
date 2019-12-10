import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';
import moment from 'moment';


test('should generate set start action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});
test('should generate set start action object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set text filter action object', ()=>{
    const action= setTextFilter('kot');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'kot'
    });
});

test('should generate no text filter action object', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});
test('should generate sort by date action object', ()=>{
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});
test('should generate sort by date action object', ()=>{
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});