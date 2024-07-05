import { checkingCredentials } from './authSlice';

export const checkingAunthentication = (email, password) => {
	return async dispatch => {
		dispatch(checkingCredentials());
	};
};

export const startGoogleSignIn = () => {
	return async dispatch => {
		dispatch(checkingCredentials());
	};
};
