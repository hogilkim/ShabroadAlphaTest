import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Container, Typography, Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Alert} from '@material-ui/lab'

import useStyles from './styles';

import {useDispatch} from 'react-redux'
import {ReduxForgetPassword} from '../../actions/auth'

import Copyright from '../../components/Copyright/Copyright'


const ForgetPassword = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const classes = useStyles();

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(ReduxForgetPassword({email}));
    }


    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          비밀번호 찾기
        </Typography>
        
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
            이메일 보내기
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/login" variant="body2">
                로그인하기
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                회원가입하기
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
    )
}

export default ForgetPassword
