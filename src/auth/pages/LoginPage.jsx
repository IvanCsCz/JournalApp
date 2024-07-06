import { Google } from '@mui/icons-material';
import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography
} from '@mui/material';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {
	startGoogleSignIn,
	startLoginWithEmailPassword
} from '../../store/auth/thunks';
import AuthLayout from '../layout/AuthLayout';

const formData = {
	email: '',
	password: ''
};

const formValidations = {
	email: [value => value.includes('@'), 'El correo debe tener un @'],
	password: [
		value => value.length >= 6,
		'El password debe de tener más de 6 letras.'
	]
};

const LoginPage = () => {
	const dispatch = useDispatch();
	const [formSubmitted, setFormSubmitted] = useState(false);
	const { status, errorMessage } = useSelector(state => state.auth);
	const {
		formState,
		isFormValid,
		emailValid,
		passwordValid,
		email,
		password,
		onInputChange
	} = useForm(formData, formValidations);

	const idAuthenticating = useMemo(() => status === 'checking', [status]);

	const onSubmit = ev => {
		ev.preventDefault();
		setFormSubmitted(true);

		if (!isFormValid) return;

		dispatch(startLoginWithEmailPassword(formState));
	};

	const onGoogleSignIn = () => {
		dispatch(startGoogleSignIn());
	};

	return (
		<AuthLayout title='Login'>
			<form onSubmit={onSubmit}>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Correo'
							type='email'
							placeholder='correo@google.com'
							name='email'
							value={email}
							onChange={onInputChange}
							error={!!emailValid && formSubmitted}
							helperText={emailValid}
							fullWidth
						/>
					</Grid>

					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Contraseña'
							type='password'
							placeholder='Contraseña'
							name='password'
							value={password}
							onChange={onInputChange}
							error={!!passwordValid && formSubmitted}
							helperText={passwordValid}
							fullWidth
						/>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
						<Grid item xs={12} sm={12} display={errorMessage ? '' : 'none'}>
							<Alert severity='error'>{errorMessage}</Alert>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Button
								type='submit'
								disabled={idAuthenticating}
								variant='contained'
								fullWidth
							>
								Login
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button
								onClick={onGoogleSignIn}
								disabled={idAuthenticating}
								variant='contained'
								fullWidth
							>
								<Google />
								<Typography sx={{ ml: 1 }}>Google</Typography>
							</Button>
						</Grid>
					</Grid>

					<Grid container direction='row' justifyContent='end'>
						<Link component={RouterLink} color='inherit' to='/auth/register'>
							Crear una cuenta
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};

export default LoginPage;
