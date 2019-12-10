import React from 'react';
import {connect} from 'react-redux';
import {Link}  from 'react-router-dom';

export const ExpenseListItem = ({id, description, amount, createdAt, dispatch})=>(
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{amount} - {createdAt}</p> 
    </div>
);


const ConnectedExpenseListItem = connect()(ExpenseListItem);

export default ConnectedExpenseListItem;