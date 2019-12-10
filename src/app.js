import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store  = configureStore();

const waterbillItem = store.dispatch(addExpense({description: 'water bill', note: 'much overdue', amount: .99}));
const gassbillItem = store.dispatch(addExpense({description: 'gas bill', note: 'for Sept', amount: 239.56}));
const foodbillItem = store.dispatch(addExpense({description: 'grocery bill', note: 'from Lidl', amount: 89.56, createdAt:3000}));
const rent = store.dispatch(addExpense({description: 'rent', amount: 889, createdAt:-23}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

//ReactDOM.render(<AppRouter/>, document.getElementById('app'));
ReactDOM.render(jsx, document.getElementById('app'));