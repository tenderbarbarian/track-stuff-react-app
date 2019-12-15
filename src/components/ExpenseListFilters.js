import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			calendarFocused: null
		};
	}
	onDatesChange = ({ startDate, endDate }) => {
		//this.props.dispatch(setStartDate(startDate));
		//this.props.dispatch(setEndDate(endDate));
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};
	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	};
	onTextChange = (e) => {
		//this.props.dispatch(setTextFilter(e.target.value));
		this.props.setTextFilter(e.target.value);
	};
	onSortChange = (e) => {
		if (e.target.value === 'amount') {
			//this.props.dispatch(sortByAmount());
			this.props.sortByAmount();
		} else if (e.target.value === 'date') {
			//this.props.dispatch(sortByDate());
			this.props.sortByDate();
		}
	};
	render() {
		return (
			<div className="content-container">
				<div className="input-group">
					<div className="input-group__item">
						<input
							type="text"
							className="text-input"
							value={this.props.filters.text}
							onChange={this.onTextChange}
							placeholder="Search Expenses"
						/>
					</div>
					<div className="input-group__item">
						<select className="select" value={this.props.filters.sortBy} onChange={this.onSortChange}>
							<option value="date">Date</option>
							<option value="amount">Amount</option>
						</select>
					</div>
					<div className="input-group__item">
						<DateRangePicker
							startDate={this.props.filters.startDate}
							startDateId="your_unique_start_date_id"
							endDate={this.props.filters.endDate}
							endDateId="your_unique_end_date_id"
							onDatesChange={this.onDatesChange}
							focusedInput={this.state.calendarFocused}
							onFocusChange={this.onFocusChange}
							showClearDates={true}
							numberOfMonths={1}
							isOutsideRange={() => false}
						/>
					</div>
				</div>
			</div>
		);
	}
}

// const ExpenseListFilters = (props) => (
//     <div>
//         <input
//             type='text'
//             value={props.filters.text}
//             onChange={(e)=>{
//                 props.dispatch(setTextFilter(e.target.value));
//             }}
//         />
//         <select
//             value={props.filters.sortBy}
//             onChange={(e)=>{
//                 if (e.target.value === 'amount') {
//                     props.dispatch(sortByAmount());
//                     } else if (e.target.value === 'date') {
//                         props.dispatch(sortByDate());
//                         };
//             }}
//         >
//             <option value="date">Date</option>
//             <option value="amount">Amount</option>
//         </select>
//     </div>
// );

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	};
};

const mapDispatchToProps = (dispatch) => ({
	sortByAmount: () => dispatch(sortByAmount()),
	sortByDate: () => dispatch(sortByDate()),
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate)),
	setStartDate: (startDate) => dispatch(setStartDate(startDate))
});

const ConnectedExpenseListFilters = connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

export default ConnectedExpenseListFilters;
