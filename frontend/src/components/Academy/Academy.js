import React from 'react'
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Typography, ButtonBase } from '@material-ui/core';
import {useHistory} from 'react-router-dom';






const Academy = ({academy}) => {
    const history = useHistory();
    const openAcademy = () => history.push(`/academy/${academy._id}`);
    console.log({academy})

    const classes = useStyles();
    return (
        <>
        {academy && (
            <ButtonBase component= "span" className={classes.cardAction} onClick={openAcademy}>
            <Card className = {classes.card} raised elevation={6}>
                
                <CardMedia className = {classes.media} image = {"https://www.chula.ac.th/wp-content/uploads/2018/03/language-institute-hero-1440x900.jpg"} title={academy.name}/>
                <div className = {classes.overlay}>
                    <Typography variant = "h6">{academy.name}</Typography>
                    <Typography variant = "h6">{academy.city}</Typography>
                    <Typography variant = "body2">{academy.rating}</Typography>
                </div>
                <div className = {classes.details}>
                    <CardContent>
                        <Typography variant="body2" color = "textSecondary">{academy.name}</Typography>
                    </CardContent>
                </div>
            
            </Card>
            </ButtonBase>
        )}
        </>
    )
}

export default Academy
