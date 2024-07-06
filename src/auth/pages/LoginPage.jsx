import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {
	checkingAunthentication,
	startGoogleSignIn
} from '../../store/auth/thunks';
import AuthLayout from '../layout/AuthLayout';

const formData = {
	email: 'testing@google.com',
	password: '1234'
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
	const { status } = useSelector(state => state.auth);
	const { email, password, onInputChange } = useForm(formData, formValidations);

	const idAuthenticating = useMemo(() => status === 'checking', [status]);

	const onSubmit = ev => {
		ev.preventDefault();

		dispatch(checkingAunthentication());
	};

	const onGoogleSignIn = () => {
		console.log('onGoogleSignIn');
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
							fullWidth
						/>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
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
