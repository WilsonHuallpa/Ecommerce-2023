import * as React from 'react';
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
import { Google } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useForm } from '../../hooks';
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

const theme = createTheme();
const formData = {
  email: '',
  password: '',
}

export const SignIn = () => {

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch( startLoginWithEmailPassword({email, password}));
  };

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  }

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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Bienvenido
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Correo"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              value={ email }
              onChange= { onInputChange }

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              value={ password }
              onChange= { onInputChange }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button
                variant='contained'
                fullWidth
                onClick={ onGoogleSignIn }
                color= "error"
              >
                <Google/>
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>

            <Grid container sx={{m: 1}}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <RouteLink to="/auth/register">
                  {"Don't have an account? Sign Up"}
                </RouteLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}