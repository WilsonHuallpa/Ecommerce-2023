import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../imgs/logo.png';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../store/auth';

const theme = createTheme((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "7rem",
    },
    appBar:{
        backgroundColor: "whitesmoke",
        boxShadow: "none",
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        marginLeft: theme.spacing(2),
    },
    image: {
        marginRight: "10px",
        height: "1rem",
    }

}));

export const Navbar = () => {
    const dispatch = useDispatch();
    const { product } = useSelector( state => state.basket );
    const { displayName } = useSelector( state => state.auth );
    const onLogout = () => {
        dispatch( startLogout());
    }
  return (
    <Box sx={{ flexGrow: 1 }} style={{flexGrow: 1, marginBottom: "7rem",}}>
        <AppBar position="fixed" style={{ backgroundColor: "whitesmoke", boxShadow: "none",}}>
            <Toolbar>
            <Link to="/">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >   
                    <img src={ logo }  style= {{ marginRight: "10px", height: "3rem"}} />
                </IconButton>
            </Link>
          
             
            <div  style={{ flexGrow: 1}}/>
            <Typography variant="h6" color="textPrimary" component="p">
                { displayName }
            </Typography>
                <Button onClick={onLogout} variant='outlined'  color="info" style={{marginLeft: theme.spacing(2)}}>
                        <strong>Sign In</strong>
                </Button>
                <Link to="checkout-page">
                    <IconButton aria-label='show cart items' color='inherit'>
                        <Badge badgeContent={product?.length} color="secondary">
                            <ShoppingCart fontSize="large" color='primary'/>
                        </Badge>
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    </Box>
  );
}
