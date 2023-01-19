
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link as RouteLink} from 'react-router-dom';
import { useForm } from '../../hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const formData = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
}

const formValidations = {
  email: [ (value) => value.includes('@'), "El correo debe de tener un @"],
  password: [ (value) => value.length >= 6, "El password debe de tener más de 6 letras."],
  firstName: [ (value) => value.length >= 2, "El nombre es obligatorio."],
  lastName: [ (value) => value.length >= 2, "El Apellido es obligatorio."],
}

const theme = createTheme();

export function SignUp() {

  const dispatch = useDispatch();
  const [ formSubmitted, setFormSubmitted ] = useState(false)
  const { firstName, lastName, email, 
          password, onInputChange, formState,
          isFormValid, firstNameValid, lastNameValid, 
          emailValid, passwordValid} = useForm(formData, formValidations);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if( !isFormValid ) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* Agregar iconos */}
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nombre"
                  type="text"
                  autoComplete="given-name"
                  fullWidth
                  name="firstName"
                  required
                  autoFocus
                  value={ firstName }
                  onChange={ onInputChange }
                  error={ !!firstNameValid && formSubmitted }
                  helperText={ firstNameValid }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Apellido"
                  type="text"
                  required
                  fullWidth
                  name="lastName"
                  autoComplete="family-name"
                  value={ lastName }
                  onChange={ onInputChange }
                  error={ !!lastNameValid && formSubmitted }
                  helperText={ lastNameValid }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  required
                  fullWidth
                  name="email"
                  autoComplete="email"
                  value={ email }
                  onChange={ onInputChange }
                  error={ !!emailValid && formSubmitted }
                  helperText={ emailValid }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contraseña"
                  name="password"
                  type="password"
                  required
                  fullWidth
                  autoComplete="new-password"
                  value={ password }
                  onChange={ onInputChange }
                  error={ !!passwordValid && formSubmitted }
                  helperText={ passwordValid }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Quiero recibir inspiración, promociones de marketing y actualizaciones por correo electrónico."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouteLink to="/auth/login">
                  Already have an account? Sign in
                </RouteLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}