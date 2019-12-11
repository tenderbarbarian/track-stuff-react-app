import selectExpensesTotal from "../../selectors/expenses-total.js";
import expenses from '../fixtures/expenses'

test('should output total for multiple expenses', ()=>{
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(expenses[0].amount+expenses[1].amount+expenses[2].amount);
});

test('should output 0 if no expenses', ()=>{
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});

test('should output amount for a single expenses', ()=>{
    const total = selectExpensesTotal([expenses[2]]);
    expect(total).toBe(expenses[2].amount);
});