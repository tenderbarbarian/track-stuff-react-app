import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

export class AddExpensePage extends React.Component{
    onSubmit = (expense)=>{
        //props.dispatch(addExpense(expense));
        this.props.addExpense(expense);  //used with mapDispatchTo props. Doing it this way so that it's easier to test
        this.props.history.push('/');  //go to the home page
    };
    render (){
        return(
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmit= {this.onSubmit}
                />
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
const mapDispatchToProps = (dispatch) =>{
    return{
        addExpense: (expense) => dispatch(addExpense(expense))
    };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);