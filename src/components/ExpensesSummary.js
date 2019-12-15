import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export const ExpensesSummary = (props) => (
	<div className="page-header">
		<div className="content-container">
			<h1 className="page-header__title">
				Viewing <span>{props.expenses.length}</span> expense{!(props.expenses.length === 1) && 's'} totalling:{' '}
				<span>{numeral(expensesTotal(props.expenses)).format('$0,0.00')}</span>
			</h1>
			<div className="page-header__actions">
				<Link className="button" to="/create">
					Add expense
				</Link>
			</div>
		</div>
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

const ConnectedExpensesSummary = connect(mapStateToProps)(ExpensesSummary);
export default ConnectedExpensesSummary;
