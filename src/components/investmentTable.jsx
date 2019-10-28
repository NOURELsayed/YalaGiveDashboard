import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

import { Paper,Avatar } from '@material-ui/core'

import profilePic from "../assets/images/profilepic.jpg"

import AddAccessToken from '../components/addAccessToken'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    button: {
        margin: theme.spacing(1),
      },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Avatar</TableCell>
                        <TableCell align='center'>Token</TableCell>
                        {/* <TableCell align='center'>Offering</TableCell> */}
                        <TableCell align='center'>Asset Type</TableCell>
                        <TableCell align='center'>Stracture</TableCell>
                        <TableCell align='center'>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                <Avatar src={profilePic}  style={{ margin: 10, width: 60, height: 60 }} />
                            </TableCell>
                            <TableCell align="right"><AddAccessToken/></TableCell>
                            {/* <TableCell align="right">
                                <Button variant="outlined" color="primary" className={classes.button}>Create Offer</Button>
                            </TableCell> */}
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}