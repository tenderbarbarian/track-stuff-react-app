import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { history } from '../routers/AppRouter';

export class EditExpensePage extends React.Component {
	onSubmit = (expense) => {
		//this.props.dispatch(startEditExpense(this.props.expense.id, expense));
		this.props.startEditExpense(this.props.expense.id, expense);
		this.props.history.push('/dashboard'); //go to the home page
	};
	onRemove = (e) => {
		//this.props.dispatch(removeExpense({id: this.props.match.params.id}));
		this.props.startRemoveExpense({ id: this.props.expense.id });
		this.props.history.push('/dashboard');
	};
	render() {
		return (
			<div>
				<div className="page-header">
					<h1 className="page-header__title">Edit Expense</h1>
				</div>
				<div className="content-container">
					{/* This is my edit expense. ID: {this.props.match.params.id} */}
					<ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
					<button onClick={this.onRemove} className="button button--grey">
						Remove Expense
					</button>
				</div>
			</div>
		);
	}
}

// const EditExpensePage = (props)=> {
//     // console.log(props);
//     return (
//         <div>
//             {/* This is my edit expense. ID: {props.match.params.id} */}
//             <ExpenseForm
//             expense = {props.expense}
//             onSubmit= {(expense)=>{
//                 props.dispatch(startEditExpense(props.expense.id, expense));
//                 props.history.push('/');  //go to the home page
//             }}
//             />
//             <button onClick={(e)=>{
//                 props.dispatch(removeExpense({id: props.match.params.id}));
//                 props.history.push('/');
//                 }}>Remove
//             </button>
//         </div>
//     )
// };

const mapDispatchToProps = (dispatch) => {
	return {
		startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
		startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
	};
};

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	};
};

//export default connect(mapStateToProps)(EditExpensePage);
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
