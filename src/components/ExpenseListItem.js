import React from 'react';
import {connect} from 'react-redux';
import {Link}  from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({id, description, amount, createdAt, dispatch})=>(
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{numeral(amount).format('$0,0.00')} 
        - 
        {moment(createdAt).format('MMMM Do, YYYY')}</p> 
    </div>
);


const ConnectedExpenseListItem = connect()(ExpenseListItem);

export default ConnectedExpenseListItem;