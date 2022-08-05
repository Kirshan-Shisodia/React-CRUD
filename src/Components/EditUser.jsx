import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { getAllUser, editUser } from '../Service/api'


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

function EditUser() {
    const classes = useStyle()
    const [user, setUser] = useState(initionValues);
    const {name, username, phone, email} = user;
    const { id } = useParams();
    const navigate  = useNavigate()

    useEffect(() => {
        loadDataApi()
    },[])

    const loadDataApi = async() => {
        const res = await getAllUser(id);
        setUser(res.data);
    }

    function inputHandle(e) {
        setUser({...user, [e.target.name] : e.target.value})
        console.log(user);
    }
    
        const submitHandle = async() =>{
            await editUser(user, id);
            navigate('/');
        }
    

    return(
        <FormGroup className={classes.container}>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>inputHandle(e)} name="name" value={name}/>
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
            <Button variant='contained'  onClick={()=>submitHandle()}>Edit User</Button>
        </FormGroup>
    )
}

export default EditUser;