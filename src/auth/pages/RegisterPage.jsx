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
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import AuthLayout from '../layout/AuthLayout';

const formData = {
	displayName: '',
	email: '',
	password: ''
};

const formValidations = {
	displayName: [value => value.length >= 1, 'El nombre es obligatorio.'],
	email: [value => value.includes('@'), 'El correo debe tener un @'],
	password: [
		value => value.length >= 6,
		'El password debe de tener más de 6 letras.'
	]
};

const RegisterPage = () => {
	const dispatch = useDispatch();
	const [formSubmitted, setFormSubmitted] = useState(false);
	const { status, errorMessage } = useSelector(state => state.auth);
	const isCheckingAuthentication = useMemo(
		() => status === 'checking',
		[status]
	);

	const {
		formState,
		isFormValid,
		displayNameValid,
		emailValid,
		passwordValid,
		displayName,
		email,
		password,
		onInputChange
	} = useForm(formData, formValidations);

	const onSubmit = ev => {
		ev.preventDefault();
		setFormSubmitted(true);

		if (!isFormValid) return;

		dispatch(startCreatingUserWithEmailPassword(formState));
		console.log({ displayName, email, password });
	};

	return (
		<AuthLayout title='Crear cuenta'>
			<form
				onSubmit={onSubmit}
				className='animate__animated animate__fadeIn animate__faster'
			>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Nombre completo'
							type='text'
							placeholder='Nombre completo'
							name='displayName'
							value={displayName}
							onChange={onInputChange}
							error={!!displayNameValid && formSubmitted}
							helperText={displayNameValid}
							fullWidth
						/>
					</Grid>

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
						<Grid item xs={12} sm={12}>
							<Button
								type='submit'
								disabled={isCheckingAuthentication}
								variant='contained'
								fullWidth
							>
								Crear cuenta
							</Button>
						</Grid>
					</Grid>

					<Grid container direction='row' justifyContent='end'>
						<Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
						<Link component={RouterLink} color='inherit' to='/auth/login'>
							Ingresar
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};

export default RegisterPage;
