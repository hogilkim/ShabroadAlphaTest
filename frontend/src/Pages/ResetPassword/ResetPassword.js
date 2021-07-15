import React, {useEffect, useState} from 'react'
import { Container, Typography, Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box} from '@material-ui/core';
import {Alert} from '@material-ui/lab'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {} from '../../actions/auth'

const ResetPassword = ({match}) => {
    // const history = useHistory();
    const classes = useStyles();

    const [resetData, setResetData] = useState({password:'', confirm_password:'', token:''})
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        let token = match.params.token
        if(token){
            setFormData({...FormData, token})
        }
    })

    const handleChange = (e) => {
        setResetData({...resetData, [e.target.name]: e.target.value});

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(resetData.password && resetData.confirm_password){
            if(resetData.password === resetData.confirm_password){
                dispatch(ReduxResetPassword(resetData))
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
              비밀번호 재설정
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  
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
                비밀번호 재설정
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="localhost:3000/login" variant="body2">
                    로그인
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
          </Box>
        </Container>
      );
}

export default ResetPassword
