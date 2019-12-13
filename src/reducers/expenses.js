const expensesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [ ...state, action.expense ];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expenseItem) => {
				if (expenseItem.id === action.id) {
					return {
						...expenseItem,
						...action.updates
					};
				} else {
					return expenseItem;
				}
			});
		case 'SET_EXPENSES':
			return action.expenses;
		default:
			return state;
	}
};

export default expensesReducer;
