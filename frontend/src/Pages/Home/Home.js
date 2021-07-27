import React, {useEffect} from 'react';
import Map from '../../components/Map/Map';

import {useDispatch} from 'react-redux';
import {getAllPrograms} from '../../actions/searchPrograms'
const Home = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
            dispatch(getAllPrograms())
        }, [dispatch])
    return (
        <div>
            <Map/>
        </div>
    )
}

export default Home