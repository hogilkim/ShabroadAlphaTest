import React from 'react';
import { Container, Typography, AppBar} from '@material-ui/core';

const App = () => {
    return (
        <Container>
            <AppBar position = "static" color = "inherit">
                <Typography variant="h2" align="center">Memories</Typography>
            </AppBar>
        </Container>
    )
}

export default App;