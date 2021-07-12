import React, {useState, useEffect} from 'react';
// import {useHistory} from 'react-router-dom';
import jwt from 'jsonwebtoken'
import {useDispatch} from 'react-redux';
import {ReduxActivation} from '../../actions/auth'
import {Button, Container} from '@material-ui/core'
import {Alert} from '@material-ui/lab'


const Activate = ({match}) => {
    // const history = useHistory();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({firstName:'', lastName:'', token:''})
    const [success, setSuccess] = useState(false);//!

    useEffect(()=>{
        let token = match.params.token;
        let firstName = jwt.decode(token);
        let lastName = jwt.decode(token);

        if(token){
            setFormData({...formData, firstName, lastName, token})
        }
    },[match.params, formData])

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(ReduxActivation(formData, setSuccess));
    }

    return (
        <Container component="main" maxWidth="xs">
            <form noValidate onSubmit={handleSubmit}>
                <Button type="submit" variant="contained" color="primary">
                    이메일 인증하기!
                </Button>
                {success&&<Alert severity="success">인증성공! 로그인을 해 주십시오!</Alert>}
                {success&&<Button variant="contained" color="primary" href="/login">로그인</Button>}
            </form>
        </Container>
    )
}

export default Activate
