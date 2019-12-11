import React from 'react';
import {connect} from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props)=>(
    <div>
        Viewing {props.expenses.length} expense{!(props.expenses.length===1)&&'s'} totalling: {numeral(expensesTotal(props.expenses)).format('$0,0.00')}
    </div>

);

const mapStateToProps = (state)=>{
    return{
        expenses: selectExpenses(state.expenses, state.filters)
    };
};


const ConnectedExpensesSummary = connect(mapStateToProps)(ExpensesSummary);
export default ConnectedExpensesSummary;