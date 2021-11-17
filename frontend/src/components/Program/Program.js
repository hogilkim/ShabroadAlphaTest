import React from 'react'
import useStyles from './styles';
import { Card, CardContent, CardMedia, Typography, ButtonBase } from '@material-ui/core';
import {useHistory} from 'react-router-dom';


const Program = ({program}) => {
    const history = useHistory();
    const openProgram = () => history.push(`/program/${program._id}`);


    const classes = useStyles();
    return (
        <>
        {program && (
            <ButtonBase component= "span" className={classes.cardAction} onClick={openProgram}>
            <Card className = {classes.card} raised elevation={6}>
                
                <CardMedia className = {classes.media} image = {"https://www.chula.ac.th/wp-content/uploads/2018/03/language-institute-hero-1440x900.jpg"} title={program.program_name}/>
                <div className = {classes.overlay}>
                    <Typography variant = "h6">{program.program_name}</Typography>
                    <Typography variant = "h6">{program.city}</Typography>
                    <Typography variant = "body2">{program.program_type}</Typography>
                </div>
                <div className = {classes.details}>
                    <CardContent>
                        <Typography variant="body2" color = "textSecondary">{program.hashtag.map((tag)=>`#${tag} `)}</Typography>
                    </CardContent>
                </div>
            
            </Card>
            </ButtonBase>
        )}
        </>
    )
}

export default Program
