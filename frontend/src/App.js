import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React from 'react';
import { Container} from '@material-ui/core';

import NavBar from './components/Navbar/Navbar'

//pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import MyPage from "./Pages/MyPage/MyPage";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Activate from "./Pages/Activate/Activate";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Programs from "./Pages/Programs/Programs";
import ProgramDetails from "./Pages/ProgramDetails/ProgramDetails";

const App = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <BrowserRouter>
            <Container>
                <NavBar/>
                <Switch>
                    <Route path= '/' exact component={Home} />
                    <Route path= '/about' exact component={About} />
                    <Route path= '/mypage' exact component={MyPage} />
                    <Route path= '/login' exact component={()=>(!user?<Login/> : <Redirect to="/" />)} />
                    <Route path= '/signup' exact component={SignUp} />
                    <Route path= '/user/activate/:token' exact component={Activate}/>
                    <Route path= '/user/password/forget' exact component={ForgetPassword} />
                    <Route path= '/user/password/reset/:token' exact component={ResetPassword} />
                    <Route path= '/programs' exact component={Programs} />
                    <Route path= '/programs/search' exact component={Programs} />
                    <Route path= '/program/:id' exact component={ProgramDetails} />
                    <Route component={NotFound}/>   //Not Found Page if wrong url
                </Switch>
            </Container>
        </BrowserRouter>

        // <Container>
        //     <AppBar position = "static" color = "inherit">
        //         <Typography variant="h2" align="center">Memories</Typography>
        //     </AppBar>
        // </Container>
    )
}

export default App;