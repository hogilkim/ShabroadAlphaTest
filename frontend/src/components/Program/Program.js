import React from 'react'
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';


const Program = ({program}) => {
    const classes = useStyles();
    return (
        <>
        {program && (
            <Card className = {classes.card} raised elevation={6}>
                <CardMedia className = {classes.media} image = {"https://www.chula.ac.th/wp-content/uploads/2018/03/language-institute-hero-1440x900.jpg"} title={program.program_name}/>
                <div className = {classes.overlay}>
                    <Typography variant = "h6">{program.program_name}</Typography>
                    <Typography variant = "h6">{program.city}</Typography>
                    <Typography variant = "body2">{program.program_type}</Typography>
                </div>
                <div className = {classes.details}>
                    <Typography variant="body2" color = "textSecondary">{program.hashtag.map((tag)=>`#${tag}`)}</Typography>
                </div>
            </Card>
        )}
        </>
    )
}

export default Program
