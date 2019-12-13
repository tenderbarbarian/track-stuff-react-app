import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([ thunk ]);

test('should setup remove expense action object', () => {
	const action = removeExpense({ id: '1234567' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '1234567'
	});
});

test('should setup edit expense action object', () => {
	const action = editExpense('1234', { description: 'koko', amount: 9.99 });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '1234',
		updates: {
			description: 'koko',
			amount: 9.99
		}
	});
});

test('should setup add expense action object with provided values', () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test('should add expense to the database and store', (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: 'tea',
		amount: 89,
		note: 'Supplies for tough times',
		createdAt: 1999
	};
	store
		.dispatch(startAddExpense(expenseData))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...expenseData
				}
			});
			return database.ref(`expenses/${actions[0].expense.id}`).once('value');
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseData);
			done();
		});
});

test('should add expense with defaults to the database and store', (done) => {
	const store = createMockStore({});
	const expenseDataDefaults = {
		description: '',
		note: '',
		amount: 0,
		createdAt: 0
	};
	store
		.dispatch(startAddExpense({}))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...expenseDataDefaults
				}
			});
			return database.ref(`expenses/${actions[0].expense.id}`).once('value');
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseDataDefaults);
			done();
		});
});
// test('should setup add expense action object with default values', ()=>{
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     });
// });
