import React, {useEffect} from 'react'
import {Pagination, PaginationItem} from '@material-ui/lab'
import {Link, useLocation} from 'react-router-dom'
import useStyles from './styles'
import {useDispatch, useSelector} from 'react-redux';

import { getAllPrograms } from '../../actions/searchPrograms';


function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const Paginate = ({page}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const numberOfPages =  useSelector((state)=>state.searchPrograms.numberOfPages)

    const query = useQuery();
    const hashtags = query.get('hashtags');
    const city = query.get('city');

    useEffect(()=> {
        if(page && !(city&&hashtags)) dispatch(getAllPrograms(page))
    },[page])

    return (
        <Pagination 
            classes={{ul: classes.ul}}
            count={numberOfPages}
            page={Number(page) || 1}
            variant ="outlined"
            color="primary"
            renderItem={(item)=>(
                <PaginationItem {...item} component={Link} to={`/programs?page=${item.page}`}/>
            )}
        />
    );
};

export default Paginate;
