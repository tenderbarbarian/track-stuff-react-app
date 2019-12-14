import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import LoginPage from '../components/LoginPage';

export const history = createBrowserHistory();

const AppRouter = () => (
	//<BrowserRouter>
	<Router history={history}>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={LoginPage} exact={true} />
				<Route path="/dashboard" component={ExpenseDashboardPage} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router> //</BrowserRouter>
);

export default AppRouter;
