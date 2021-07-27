import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import SearchPrograms from "./Pages/SearchPrograms/SearchPrograms";

const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <NavBar/>
                <Switch>
                    <Route path= '/' exact component={Home} />
                    <Route path= '/about' exact component={About} />
                    <Route path= '/mypage' exact component={MyPage} />
                    <Route path= '/login' exact component={Login} />
                    <Route path= '/signup' exact component={SignUp} />
                    <Route path= '/searchPrograms' exact component={SearchPrograms} />
                    <Route path= '/user/activate/:token' exact component={Activate}/>
                    <Route path= '/user/password/forget' exact component={ForgetPassword} />
                    <Route path= '/user/password/reset/:token' exact component={ResetPassword} />
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