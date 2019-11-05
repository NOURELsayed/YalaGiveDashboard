
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CampaignCreator from './campaignCreator'


import Copyright from '../../components/copyright'
import Header from '../../components/header'
import Compaignmedia from './compaignmedia'
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },

}));
export default function AutoGrid() {
    const classes = useStyles();
    return (
        <div>
            <Header />
            <Grid container xs={12} >

                <Grid item xs={2}>
                </Grid>

                <Grid item xs={8} className={classes.root}>
                    <Grid item xs={8}  sm={8}> <Compaignmedia /> </Grid>
                    <Grid item xs={4}  sm={4} > <CampaignCreator /> </Grid>
                </Grid>

                <Grid item xs={2}>
                </Grid>

            </Grid>

            <Copyright />
        </div>
    );
}