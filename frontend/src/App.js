import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import { Container, Typography, AppBar} from '@material-ui/core';
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import MyPage from "./Pages/MyPage";
import Login from "./Pages/Login";

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path= '/' exact component={Home} />
            <Route path= '/about' exact component={About} />
            <Route path= '/mypage' exact component={MyPage} />
            <Route path= '/Login' exact component={Login} />
            <Route component={NotFound}/>   //Not Found Page if wrong url
        </Switch>
        </BrowserRouter>
        // <Container>
        //     <AppBar position = "static" color = "inherit">
        //         <Typography variant="h2" align="center">Memories</Typography>
        //     </AppBar>
        // </Container>
    )
}

export default App;