import React, {useState, useRef} from 'react';
import {Grid, Button,  Paper, Typography} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
// import Map from '../../components/Map/Map';
import { makeStyles,  } from '@material-ui/core/styles';

import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import { getAcademiesBySearch } from '../../ReduxModules/searchAcademies';

//test
import QuillEditor from '../../components/QuillEditor/QuillEditor';

const useStyles = makeStyles(() => ({
    search_container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 0,
        backgroundColor: 'white',
        zIndex: 100,
        width: '100%'
    },
    search_icon:{
        objectFit:'contain',
        height : '50px',
        marginLeft: '10px',

    },
    search_center:{
        display:'flex',
        flex: 1,
        alignItmes: 'center',
        maxWidth: 'fit-content',
        padding: '10px',
        height: '30px',
        border: '1px solid lightgray',
        borderRadius: '999px'
    },
    search_input:{
        border: 'none',
        padding: '10px',
        outlineWidth: 0,
        width: '250px',
        // height: '15px'
    }
  }));

// const cityOptions= {
//     US :['뉴욕', '보스톤', 'LA', '샌프란시스코', '시카고'],
//     Canada : ['토론토', '몬트리올'],
//     UK : ['런던', '맨체스터'],
//     Austrailia : ['시드니', '멜버른'],
//     Philippine : ['마닐라', '세부'],
//     Vietnam : ['호찌민', '하노이', '다낭']
// }

const usCities = ['New York', 'Boston', 'LA', 'Chicago']
const canadaCities = ['토론토', '몬트리올']


const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    // const [open, setOpen] = useState(false);
    // const anchorRef = useRef(null);

    const [city, setCity] = useState("도시를 선택해 주세요!")

    // const handleClose = (event) => {
    //     if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //         return;
    //     }
    
    //     setOpen(false);
    //     };
    
    // const handleToggle = () => {
    // setOpen((prevOpen) => !prevOpen);
    // };
    // const handleMenuItemClick = (event, city) => {
    //     setCity(city);
    //     setOpen(false);
    // };

    const searchAcademy = (e)=>{
        if(city){
            dispatch(getAcademiesBySearch(city));
            history.push(`/academies/search?city=${city}`)
        } else {
            history.push('/academies')
        }
    }
    return (
        <>
        <div className={classes.search_container}>
            <img className={classes.search_icon}
            src = "https://www.shabroad.com/assets/img/2019/header-logo.png"
            alt= "Shabroad Icon"/>
            
            <div className={classes.search_center}>
                <Typography className={classes.search_input} type='text' placeholder="도시를 선택해주세요" > {city} </Typography>
                <SearchIcon/>
            </div>
            <div className={classes.search_right}>
                <Button onClick={searchAcademy}>검색</Button>
                <Button onClick={()=>{history.push('/programs')}}>나에게 맞는 프로그램 찾기</Button>
            </div>

        </div>
            <Paper className={classes.select_city}>
                <Grid>
                    {usCities.map((city)=>
                        <Button onClick={()=>{setCity(city)}}>{city}</Button>
                    )}
                </Grid>
                <Grid>
                    {canadaCities.map((city)=>
                        <Button onClick={()=>{setCity(city)}}>{city}</Button>
                    )}
                </Grid>
            </Paper>


            <QuillEditor/>
        </>
    );
}
export default Home

//onClick={cityClick(city)}
{/* <div>
                <Map/>
            </div> */}