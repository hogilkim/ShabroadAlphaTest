import React from 'react';
import {Link} from 'react-router-dom';
import { Toolbar, Button, AppBar, Typography } from '@material-ui/core';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    const user = localStorage.getItem('user');
    console.log("Navbar: ", user);

    return (
        <>
        <AppBar className = {classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography className = {classes.heading} variant="h2" align="center">Alpha Test</Typography>

            </div>
        </AppBar>
        <Toolbar className = {classes.toolbar}>
            {user? (<Button component={Link} to="/mypage" variant="contained" color="primary">마이페이지</Button>)
            : (<Button component={Link} to="/login" variant="contained" color="primary">로그인</Button>)}
        </Toolbar>
        </>
    );
}

export default Navbar;
