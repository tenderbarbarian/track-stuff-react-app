import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note : '',
			amount: props.expense ? props.expense.amount : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			error: ''
		};
	}
	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description: description }));
	};
	onTextChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};
	onAmountChange = (e) => {
		const amount = e.target.value.toString();
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};
	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};
	onFocusChange = ({ focused }) => {
		this.setState({ calendarFocused: focused });
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.description || !this.state.amount) {
			this.setState(() => ({ error: 'Please provide description and amount.' }));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10),
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			});
		}
	};
	render() {
		return (
			<form onSubmit={this.onSubmit} className="form">
				{this.state.error && <p className="form__error">{this.state.error}</p>}
				<input
					type="text"
					className="text-input"
					placeholder="description"
					autoFocus
					value={this.state.description}
					onChange={this.onDescriptionChange}
				/>
				<input
					type="number"
					className="text-input"
					placeholder="amount"
					value={this.state.amount}
					onChange={this.onAmountChange}
				/>
				<SingleDatePicker
					date={this.state.createdAt}
					onDateChange={this.onDateChange}
					focused={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					id="your_unique_id"
					isOutsideRange={() => false}
				/>
				<textarea
					placeholder="Add a note for your expense (optional)"
					className="textarea"
					value={this.state.note}
					onChange={this.onTextChange}
				/>
				<button onClick={this.update} className="button">
					Save expense
				</button>
			</form>
		);
	}
}

export default ExpenseForm;
