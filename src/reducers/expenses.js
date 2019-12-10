

const expensesReducer = (state = [], action)=>{
    switch (action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id })=> (id !== action.id));
        case 'EDIT_EXPENSE':1
            return state.map((expenseItem)=> {
                if(expenseItem.id === action.id){
                    return{
                        ...expenseItem,
                        ...action.updates
                    };
                } else{
                    return expenseItem;
                }
            });
        default:
            return state;
    }
};

export default expensesReducer;