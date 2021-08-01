import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Container, Typography, Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Alert} from '@material-ui/lab'


import useStyles from './styles';

import {useDispatch} from 'react-redux'
import {ReduxLogin} from '../../ReduxModules/auth'

import Copyright from '../../components/Copyright/Copyright'







export default function SignIn() {
  const history = useHistory();
  const [loginData, setLoginData] = useState({email: '', password:''});
  const [loginSuccess, setLoginSuccess] = useState(null);
  
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (e) => {
    setLoginData({...loginData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ReduxLogin(loginData, setLoginSuccess, history));

    }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>

        {(loginSuccess !== null)&& (loginSuccess ? <Alert severity="success">로그인 성공! 메인 페이지로 돌아갑니다</Alert> : <Alert severity="error">로그인에 실패하였습니다. 다시 시도하여 주십시오.</Alert>)}
        
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange = {handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange = {handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            로그인
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    <Copyright/>
    </Container>
  );
}