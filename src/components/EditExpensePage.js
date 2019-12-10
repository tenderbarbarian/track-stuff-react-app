import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense)=>{
        //this.props.dispatch(editExpense(this.props.expense.id, expense));
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');  //go to the home page
    }
    onRemove = (e)=>{
        //this.props.dispatch(removeExpense({id: this.props.match.params.id}));
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
        }
    render() {
            return (
                <div>
                    {/* This is my edit expense. ID: {this.props.match.params.id} */}
                    <ExpenseForm 
                    expense = {this.props.expense}
                    onSubmit= {this.onSubmit}
                    />
                    <button onClick={this.onRemove}>Remove
                    </button>
                </div>
            );
    }
};

// const EditExpensePage = (props)=> {
//     // console.log(props); 
//     return (
//         <div>
//             {/* This is my edit expense. ID: {props.match.params.id} */}
//             <ExpenseForm 
//             expense = {props.expense}
//             onSubmit= {(expense)=>{
//                 props.dispatch(editExpense(props.expense.id, expense));
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

const mapDispatchToProps = (dispatch)=>{
    return{
        editExpense: (id, expense) => dispatch(editExpense(id, expense)), 
        removeExpense: (id) => dispatch(removeExpense(id))
    }
}

const mapStateToProps = (state, props)=>{
    return{
        expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
    }
}

//export default connect(mapStateToProps)(EditExpensePage);
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);