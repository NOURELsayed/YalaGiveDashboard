
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player'
import Button from '@material-ui/core/Button';
import CampaignCreator from '../components/campaignCreator'

import Cover from '../assets/images/yallagive.png'
import Copyright from '../components/copyright'
import Campaigntab from '../components/explorertab'
import Header from '../components/header'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    button1: {
        margin: theme.spacing(1),
        maxWidth: 345,
    },
    button: {
        margin: theme.spacing(1),
        maxWidth: 345,
    },
    input: {
        display: 'none',
    },
}));

export default function CampaignDetails() {
    const classes = useStyles();

    return (
        <div >
            <Header />
            <div className={classes.container}>
                <div style={{ gridColumnEnd: 'span 8', marginLeft: '100px' }}>
                    <img src={Cover} style={{
                        width: '600px', borderWidth: '1px',
                        borderStyle: 'solid'
                    }} alt="cover photo" />
                    <Typography variant="h6" style={{ color: '#3081be' }} >
                        New Arabian Games Studio:
                    </Typography>
                    <Campaigntab />
                    <ReactPlayer url='https://www.youtube.com/watch?v=YjTiJirh-VY' />
                </div>
                <div style={{ gridColumnEnd: 'span 4' }}>
                    <CampaignCreator />
                    <div style={{ display: 'grid' }}>
                        <Button variant="outlined" color="primary" className={classes.button}>
                            Show More Details
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button1}>
                            Buy Token
                         </Button>
                    </div>
                </div>
            </div>
            <Copyright />
        </div>
    );
}