import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Container, Typography, Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box} from '@material-ui/core';
import {Alert} from '@material-ui/lab'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';

import {useDispatch} from 'react-redux';
import {ReduxSignup} from '../../actions/auth'

import Copyright from '../../components/Copyright/Copyright'





export default function SignUp() {
  const history = useHistory();
  const [signupData, setSignupData] = useState({firstName: '', lastname: '', email: '', password: '', confirm_password: ''})
  const dispatch = useDispatch();
  const classes = useStyles();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value});
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Sign Up Page:", signupData);
    if (signupData.firstName && signupData.lastName && signupData.email){
      if(signupData.password === signupData.confirm_password){
        dispatch(ReduxSignup(signupData, history));
      } else {
        setError(true);
        setErrorMessage("비밀번호가 다릅니다. 다시 확인하여 주십시오"); //confirm password wrong message
        setTimeout(()=>{
          setError(false);
          setErrorMessage("")
        }, 2000)
      }
    } else {
      setError(true);
      setErrorMessage("모든 정보를 기입하여 주십시오."); // fill in all blanks message
      setTimeout(()=>{
        setError(false);
        setErrorMessage("")
      }, 2000)
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm_password"
                label="confirm password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          {error && <Alert severity="error">{errorMessage}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            회원가입
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="localhost:3000/login" variant="body2">
                계정이 있다면? 로그인
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}