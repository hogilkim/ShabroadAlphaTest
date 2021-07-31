import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {Container, Grid, CircularProgress, Paper, AppBar, TextField, Button, Grow} from '@material-ui/core';
import useStyles from './styles';
import _ from "lodash";

import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {getAllPrograms, getProgramsBySearch} from '../../actions/searchPrograms';

import Program from '../../components/Program/Program';
import Pagination from '../../components/Pagination/Paginate';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const SearchPrograms = () => {
    const [loadState, setLoadState] = useState(false);
    const query = useQuery();
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();    
    const programs = useSelector((state)=>state.searchPrograms.programs)

    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery')

    const [searchOptions, setSearchOptions] = useState({hashtags:"", city:""});
    
    useEffect(()=>{
        if(!_.isEmpty(programs)) setLoadState(true);
        else setLoadState(false);
    },[programs])
    

    const searchProgram = () => {
        if(searchOptions){
            dispatch(getProgramsBySearch(searchOptions))
            history.push(`/programs?hashtags=${searchOptions.hashtags||'none'}&city=${searchOptions.city||'none'}`)
        } else {
            history.push('/programs')
        }
    }

    const handleChange = (e) => {
        setSearchOptions({...searchOptions, [e.target.name]: e.target.value});
    }

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    {!loadState ? <CircularProgress /> : 
                    (
                        <Grid className = {classes.container} container alignItems="stretch" spacing ={3}>
                            {programs.map((program) => (
                                <Grid key={program._id} item xs={12} sm={6} lg={3}>
                                    <Program program={program} />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Grid>
                <Grid item xs={12} sm={6} md = {3}>
                    <AppBar className ={classes.appBarSearch} position = "static" color = "inherit">
                        <TextField
                            name = "hashtags"
                            variant = "outlined"
                            label="Program Hashtags"
                            fullWidth
                            onChange={handleChange}
                            />
                        <TextField
                            name = "city"
                            variant = "outlined"
                            label="City"
                            fullWidth
                            onChange={handleChange}
                            />
                        <Button onClick ={searchProgram} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                    </AppBar>
                </Grid>
                <Paper className={classes.pagination} elevation={6}>
                    <Pagination page={page}/>
                </Paper>
            </Container>
        </Grow>
    )
}

export default SearchPrograms
