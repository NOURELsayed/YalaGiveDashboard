
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player'
import CampaignCreator from '../components/campaignCreator'

import Cover from '../assets/images/yallagive.png'
import Copyright from '../components/copyright'
import Campaigntab from '../components/explorertab'
import Header from '../components/header'


export default function AutoGrid() {

    return (
        <div>
            <Header />
            <Grid container sm={12}>

                <Grid item sm={1}>
                </Grid>

                <Grid item sm={5}>
                    <img src={Cover} style={{
                        width: '600px', borderWidth: '1px',
                        borderStyle: 'solid'
                    }} alt="cover photo" />
                    <Typography variant="h6" style={{ color: '#3081be' }} >
                        New Arabian Games Studio:
                    </Typography>
                    <Campaigntab />
                    <ReactPlayer url='https://www.youtube.com/watch?v=YjTiJirh-VY' />
                </Grid>

                <Grid item sm={1}>
                </Grid>

                <Grid item sm={5}>
                    <CampaignCreator />
                </Grid>
            </Grid>

            <Copyright />
        </div>
    );
}