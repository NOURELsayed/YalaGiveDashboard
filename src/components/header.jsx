import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import {  makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Logo from '../assets/images/logo.png'
const useStyles = makeStyles(theme => ({
    headerbtn: {
        margin: 'auto'
    },
}))

export default function PrimarySearchAppBar() {
    const classes = useStyles()
    
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <img src={Logo} />
                        <div className={classes.headerbtn}>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button color="inherit" component={Link} to="/leaderboard">LeaderBoard</Button>
                        <Button color="inherit"component={Link} to="/">Explorer</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
    )
}
