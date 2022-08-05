import React from 'react';
import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#7e6745'
    },

    tabs: {
        color:'white',
        textDecoration: 'none',
        margin: 20,
        fontSize: 20
    }
})

function NavBar(){
    const classes = useStyle();

    return(
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <Typography><Link to='/' className={classes.tabs} >CRUD</Link></Typography>
                <Typography><Link to='/' className={classes.tabs} >All Users</Link></Typography>
                <Typography><Link to='/addUser' className={classes.tabs} >Create User</Link></Typography>
            </Toolbar>
        </AppBar>
    );
}
export default NavBar;