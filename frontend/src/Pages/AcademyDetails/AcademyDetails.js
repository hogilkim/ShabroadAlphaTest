import React, {useEffect} from 'react'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getAcademy } from '../../ReduxModules/searchAcademies';
import { searchProgramsByAcademyId } from '../../ReduxModules/searchPrograms'
import { useParams } from 'react-router-dom';
import ControlledAccordian from '../../components/ControlledAccordian/ControlledAccordian'

import useStyles from './styles'




const AcademyDetails = () => {
    const {academy, isLoading} = useSelector((state)=>state.searchAcademies);
    const {programs} = useSelector((state)=>state.searchPrograms)
    const dispatch = useDispatch();
    const classes = useStyles();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(getAcademy(id));
        dispatch(searchProgramsByAcademyId(id))
    }, [id])





    if(Object.keys(academy).length === 0) return (
        <h1>해당 도시가 존재하지 않습니다</h1>
    );
    if (isLoading){
        return (
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size="7em" />
            </Paper>
        )
    }

    return (
        <>
        { !(Object.keys(academy).length === 0) && (
            <div className={classes.card}>
            <div className={classes.section}>
            <img className={classes.media} src={'http://web.mit.edu/dimitrib/www/MIT%20and%20Near%20Boston/MIT%2C%20Charles%20River/slides/Charles%20River2.jpg'} />
    
            <Typography variant="h3" component="h2">{academy.name}</Typography>
            <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{academy.programs.map((program) => `#${program} `)}</Typography>
            <Typography gutterBottom variant="body1" component="p">{academy.email}</Typography>
            <Typography variant="h6">City: {academy.city}</Typography>
            <div dangerouslySetInnerHTML={{ __html: academy.description }} />
            <Divider style={{ margin: '20px 0' }} />
            <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
            <Divider style={{ margin: '20px 0' }} />
            <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
            <Divider style={{ margin: '20px 0' }} />

            {programs && programs.map((program)=>(
                <ControlledAccordian key={program.program_name} heading={program.program_name} secondaryHeading={program.program_type} content={program.age_group}/>
            ))}
            </div>
    
        </div>
    )}
        </>)
}

export default AcademyDetails
