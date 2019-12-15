import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import { history } from '../routers/AppRouter';

export class AddExpensePage extends React.Component {
	onSubmit = (expense) => {
		//props.dispatch(startAddExpense(expense));
		this.props.startAddExpense(expense); //used with mapDispatchTo props. Doing it this way so that it's easier to test
		console.log('redirect');
		this.props.history.push('/dashboard'); //go to the home page
	};
	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Add Expense</h1>
					</div>
				</div>
				<div className="content-container">
					<ExpenseForm onSubmit={this.onSubmit} />
				</div>
			</div>
		);
	}
}

// const AddExpensePage = (props)=> (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm
//             onSubmit= {(expense)=>{
//                 props.dispatch(addExpense(expense));
//                 //props.onSubmit(expense);  //used with mapDispatchTo props. Doing it this way so that it's easier to test
//                 props.history.push('/');  //go to the home page
//             }}
//         />
//     </div>
// );

//works great as here:
//export default connect()(AddExpensePage);

//changing stuff for testing:
//build in Redux function mapDispatchToprops
const mapDispatchToProps = (dispatch) => {
	return {
		startAddExpense: (expense) => dispatch(startAddExpense(expense))
	};
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
