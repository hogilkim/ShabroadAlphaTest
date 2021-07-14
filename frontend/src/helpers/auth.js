export const authenticate = (action)=>{
    console.log('Authenticate on Signin Response');
    localStorage.setItem('user', JSON.stringify({...action?.data}))
}

