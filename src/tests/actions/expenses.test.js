import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', ()=>{
    const action = removeExpense({id: '1234567'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE', 
        id: '1234567'
    });
} );


test('should setup edit expense action object', ()=>{
    const action = editExpense('1234', {description: 'koko', amount: 9.99});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE', 
        id: '1234', 
        updates: {
            description: 'koko', 
            amount: 9.99
        }
    });
});

test('should setup add expense action object with provided values', ()=>{
    const expenseData = {
        description: 'kot', 
        note:'', 
        amount: 234.5, 
        createdAt: 0 
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});
test('should setup add expense action object withOUT provided values', ()=>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    });
});

