import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';
import moment from 'moment';



test('should set default state ', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: expenses[0].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expense, not a valid id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: '-87765--889****8'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', ()=>{
    const newExpense = {
        id: 'a8', 
        description: 'theater', 
        note: 'boring play', 
        amount: 122, 
        createdAt: moment(0).subtract(1, 'week')
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('should edit an expense', ()=>{
    const updatedExpense = {
        description: 'theater', 
        amount: 99 
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: updatedExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual({
        ...expenses[0], 
        ...updatedExpense
    });
});

test('should not edit expense, expense not found', ()=>{
    const action = {
        type: 'EDIT_EXPENSE', 
        id: '-21-gibberish', 
        updates: {
            amount: 66
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});