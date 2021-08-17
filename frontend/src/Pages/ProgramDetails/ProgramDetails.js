import React, {useEffect} from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
// import moment from 'moment';
import { useParams } from 'react-router-dom';
import {getProgram} from '../../ReduxModules/searchPrograms'

import useStyles from './styles'

const ProgramDetails = () => {
    const {program, isLoading} = useSelector((state)=>state.searchPrograms);
    const dispatch = useDispatch();
    const classes = useStyles();
    const {id} = useParams();
    var type = (program.program_type === "WEEKLY" ? "주":"텀");

    useEffect(()=>{
        dispatch(getProgram(id));
    },[id])

    
    if(Object.keys(program).length === 0) return null;
    
    if (isLoading){
        return (
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size="7em" />
            </Paper>
        )
    }

    return (
    <>
    { !(Object.keys(program).length === 0) && (
        <div className={classes.card}>
        <div className={classes.section}>
        <img className={classes.media} src={'https://polylanguages.edu/wp-content/uploads/2020/04/International-Flags.jpg'} />

          <Typography variant="h3" component="h2">{program.program_name}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{program.hashtag.map((tag) => `#${tag} `)}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">가격 {program.unit_price.map((unit) => `${unit.period}${type} : ${unit.unit_price}$ `)}</Typography>
          <Typography gutterBottom variant="body1" component="p">{program.program_type}</Typography>
          <Typography variant="h6">City: {program.city}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>

      </div>
)}
    </>)
}

export default ProgramDetails
