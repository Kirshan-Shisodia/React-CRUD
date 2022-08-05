import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useNavigate  } from "react-router-dom";

const useStyle = makeStyles({
    container : {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *' : {
            marginTop : 20
        }
    }
})

const initionValues = {
    name: '',
    username: '',
    phone: '',
    email: ''
}

function AddUser() {
    const classes = useStyle()
    const [user, setUser] = useState(initionValues);
    const {name, username, phone, email} = user;
    const navigate  = useNavigate()

    function inputHandle(e) {
        setUser({...user, [e.target.name] : e.target.value})
        console.log(user);
    }
    
        const submitHandle = async() =>{
            await addUser(user);
            navigate('/');
        }
    

    return(
        <FormGroup className={classes.container}>
            <Typography variant='h4'>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>inputHandle(e)} name="name" value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input onChange={(e)=>inputHandle(e)} name="username" value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input onChange={(e)=>inputHandle(e)} name="phone" value={phone}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>inputHandle(e)} name="email" value={email}/>
            </FormControl>
            <Button variant='contained'  onClick={()=>submitHandle()}>Submit</Button>
        </FormGroup>
    )
}

export default AddUser;