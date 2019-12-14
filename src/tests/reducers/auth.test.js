import authReducer from '../../reducers/auth';

test('should clear uid for log out', () => {
	const action = {
		type: 'LOGOUT'
	};
	const state = authReducer(undefined, action);
	expect(state).toEqual({});
});
test('should set log in for user', () => {
	const action = {
		type: 'LOGIN',
		uid: 'df-80'
	};
	const state = authReducer(undefined, action);
	expect(state.uid).toBe(action.uid);
});
