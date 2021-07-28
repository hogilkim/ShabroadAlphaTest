import React, {useEffect, useState} from 'react'
import {Grid, CircularProgress} from '@material-ui/core'
import Program from '../../components/Program/Program'
import useStyles from './styles'
import _ from "lodash";



import {useSelector} from 'react-redux'


import {useDispatch} from 'react-redux';

import {getAllPrograms} from '../../actions/searchPrograms'




const SearchPrograms = () => {
    const [loadState, setLoadState] = useState(false);

    const classes = useStyles();
    const dispatch = useDispatch();    
    const programs = useSelector((state)=>state.searchPrograms)
    useEffect(()=>{
        console.log("will dispatch")
        dispatch(getAllPrograms())
        
    }, [dispatch])
    
    useEffect(()=>{
        if(!_.isEmpty(programs)) setLoadState(true);
        else setLoadState(false);
    },[programs])
    
    console.log('programs page:', programs)



    return (
        <>
            {!loadState ? <CircularProgress /> : 
            (
                <Grid className = {classes.container} container alignItems="stretch" spacing ={3}>
                    {programs.data.map((program) => (
                        <Grid key={program._id} item xs={12} sm={6}>
                            <Program program={program} />
                        </Grid>
                    ))}
                </Grid>
            )}
            <Program />
            <Program />
        </>
    )
}

export default SearchPrograms
