import React from 'react'
import {Grid, CircularProgress} from '@material-ui/core'
import Program from '../../components/Program/Program'
import useStyles from './styles'


import {useSelector} from 'react-redux'





const SearchPrograms = () => {

    const classes = useStyles();

    

    const programs = useSelector((state)=>state.programs)
    console.log('programs page:', programs)



    return (
        <>
            {!programs.length ? <CircularProgress /> : (
                <Grid className = {classes.container} container alignItems="stretch" spacing ={3}>
                    {programs.map((program) => (
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
