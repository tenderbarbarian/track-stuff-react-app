
//const total = getExpensesTotal(expenses);
//console.log(total);

const getExpensesTotal = (expenses) => {
    return expenses.reduce((sum, expense)=>{
        return sum + expense.amount;
    }, 0);
};

export default getExpensesTotal;