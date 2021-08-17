import React, {useEffect, useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import {Container, Grid, CircularProgress, AppBar, TextField, Button, Grow} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {getAcademiesBySearch} from '../../ReduxModules/searchAcademies'
import Academy from '../../components/Academy/Academy'
import useStyles from './styles';


function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const Academies = () => {
    const query = useQuery();
    const classes = useStyles();
    const history = useHistory();
    const {academies, isLoading} = useSelector((state)=>state.searchAcademies)
    const dispatch = useDispatch();    
    const [searchCity, setSearchCity] = useState("");



    useEffect(()=>{
        const city = query.get('city');

        if(city && !academies.length){
            dispatch(getAcademiesBySearch(city))
        }
    }, [])

    const handleChange = (e)=>{
        setSearchCity(e.target.value);
    }
    const searchAcademies = () => {
        if (searchCity){
            dispatch(getAcademiesBySearch(searchCity))
            history.push(`/academies/search?city=${searchCity}`);
        } else {
            history.push('/');
        }
    }
    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    {isLoading ? <CircularProgress /> : 
                    (
                        <Grid className = {classes.container} container alignItems="stretch" spacing ={3}>
                            {academies.map((academy) => (
                                <Grid key={academy._id} item xs={12} sm={6} lg={3}>
                                    <Academy academy={academy} />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Grid>
                <Grid item xs={12} sm={6} md = {3}>
                    <AppBar className ={classes.appBarSearch} position = "static" color = "inherit">
                        <TextField
                            name = "city"
                            variant = "outlined"
                            label="City"
                            fullWidth
                            onChange={handleChange}
                            />
                        <Button onClick ={searchAcademies} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                    </AppBar>
                </Grid>
                
            </Container>
        </Grow>
    )
}

export default Academies
