import React, { useEffect, useState } from 'react';
import { getAllUser, deleteUser } from '../Service/api'
import { Link } from 'react-router-dom';
import { Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Button } from '@material-ui/core'


const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#7f7665',
            color: 'black',
            fontSize: 20
        }
    },
    row: {
        '& > *': {
            fontSize: 20
        }
    }
})

function AllUsers() {

    const [users, setUsers] = useState([]);
    const classes = useStyle();

    const allUser = async () => {
        const res = await getAllUser();
        setUsers(res.data)
    }

    useEffect(() => {
        allUser();
    }, [])

    const deletUserData = async(id) => {
        await deleteUser(id);
        allUser()
    }

    return (
        <div>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>User Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user) => {
                            return (
                                <TableRow className={classes.row}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <Button variant='contained' style={{marginRight: 10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                        <Button variant='contained' onClick={()=>{deletUserData(user.id)}}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AllUsers