import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, Icon } from '@material-ui/core'

import VerificationTab from '../../components/verificationTab'
import VerificationCards from '../../components/verificationCards'
import Portfoliotab from '../../components/portfoliotab'
import Ataa from '../../services/attaaCoin.service'
// import Charity from '../services/NewTokens.service'
import { useState, useEffect } from 'react';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflowY: 'hidden',
        overflowX: 'hidden',
    },
    paperroot: {
        padding: theme.spacing(3, 2),
        margin: 30,

    },
    icon: {
        color: '#3f51b5'
    }
}));


export default function ValidationSteps() {
    const classes = useStyles();
    const [name, setName] = useState();
    const [balance, setBalance] = useState();
    const mount = async () => {
        const account = await Ataa.Service.init();
        console.log("account", account);
        const name = await Ataa.Service.getName();
        const balance = await Ataa.Service.getBalanceOf(account);
        setName(name);
        setBalance(balance);
        console.log(name);
        console.log(balance);
/*         const charity = await Charity.Service.getName();
        console.log("charity", charity); */
    };
    useEffect(() => {
        mount();
    });
    return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs>
                <VerificationCards/>
            </Grid>
            <Grid item xs>
                <VerificationCards/>
            </Grid>
            <Grid item xs>
                <VerificationCards/>
            </Grid>
        </Grid>
        <Paper className={classes.paperroot}>
            <Grid container spacing={4}>
                <Grid item xs>
                    <h3 className={classes.icon}>Total Values</h3>
                </Grid>
                <Grid item xs>
                    <Icon className={classes.icon} fontSize="large">assignment</Icon>
                </Grid>
                <Grid item xs>
                    <Icon className={classes.icon} fontSize="large">home</Icon>
                </Grid>
                <Grid item xs>
                    <Icon className={classes.icon} fontSize="large">date_range</Icon>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Typography variant="h4" >
                        {name}
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant="h4" >
                    {balance}
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant="h4" >
                        0$
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant="h4" >
                        50$
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        <VerificationTab/>
         <Portfoliotab />
        <Portfoliotab />
        <Portfoliotab /> 
    </div>
    );
}