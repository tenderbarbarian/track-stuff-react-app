import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


// const demoState = {
//     expenses: [{
//         id: 'sadfg5432edscfg',
//         description: 'January Rent',
//         note: 'Final payment for this address',
//         amount: 45600, 
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', //date or amount
//         startDate: undefined, 
//         endDate: undefined
//     }
// };

const addExpense = ({description='', note='', amount=0, createdAt=0}) =>({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount, 
        createdAt
    }
});

const removeExpense = ({id} = {})=>({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates)=>({
    type: 'EDIT_EXPENSE',
    id, 
    updates 
});

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

const setTextFilter = (text='')=>({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByDate = () =>({
    type: 'SORT_BY_DATE'
});
const sortByAmount = () =>({
    type: 'SORT_BY_AMOUNT'
});

const setStartDate = (startDate=undefined) =>({
    type: 'SET_START_DATE',
    startDate
});
const setEndDate = (endDate=undefined) =>({
    type: 'SET_END_DATE',
    endDate
});

const defaultFiltersState = {
    text: '',
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined
};

const filtersReducer = (state=defaultFiltersState, action)=>{
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text};
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'};
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate};
        default:{
            return state;
        }
    }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) =>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof(startDate !=='number')||(expense.createdAt>=startDate);
        const endDateMatch = typeof(endDate !=='number')||(expense.createdAt<=endDate);
        const textMatch = (expense.note.toLowerCase().includes(text.toLowerCase()) || expense.description.toLowerCase().includes(text.toLowerCase()));
        return (startDateMatch && endDateMatch && textMatch);
    }).sort((a,b)=>{
        if (sortBy === 'date'){
            return (a.createdAt<b.createdAt? 1: -1);
        } else if (sortBy === 'amount'){
            return (a.amount<b.amount? 1:-1);
        }
    });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer, 
        filters: filtersReducer
    })
);


store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


// store.dispatch(addExpense({description: 'rent '}));
store.dispatch(sortByDate());
store.dispatch(setStartDate(123));
const expenseOne = store.dispatch(addExpense({description: 'coffee', amount: 9100, createdAt:-20}));
const expenseTwo = store.dispatch(addExpense({description: 'sex', amount: 343, createdAt:8000}));
//store.dispatch(editExpense(expenseOne.expense.id, {description: 'drugs', amount: 10}));
store.dispatch(sortByAmount());
 store.dispatch(setTextFilter('sex'));
// store.dispatch(setEndDate(100000000));
// store.dispatch(sortByDate());
// store.dispatch(removeExpense({id: expenseTwo.expense.id}));

// const user ={
//     name: 'mike',
//     age: 32, 
//     location: 'London',
//     sex: 'f'
// };

// console.log({...user, location: 'NYC', sex:'m'});