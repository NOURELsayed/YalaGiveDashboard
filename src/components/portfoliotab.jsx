import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Paper, Button, Typography, Grid, Avatar } from '@material-ui/core'

import profilePic from "../assets/images/charity.jpg"


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
    },
    button: {
        margin: theme.spacing(1),
      },
}));


export default function ValidationSteps() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paperroot}>
                <Grid container spacing={6}>
                    <Grid item xs>
                        <Avatar src={profilePic} alt="profile" style={{ width: '100px', height: '100px' }} />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h6" style={{margin: 'auto', alignSelf: 'center'}}>
                            yallagive 
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="p" >
                            Category
                        </Typography>
                        <Typography variant="h5" >
                            0$
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="p" >
                            Location
                        </Typography>
                        <Typography variant="h5" >
                            0$
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="p" >
                            ShareType
                        </Typography>
                        <Typography variant="h5" >
                            0$
                        </Typography>
                    </Grid>
                    <Grid item xs >
                        <Button 
                            variant="contained" 
                            color="primary"
                            className={classes.button}>
                            Explore
                        </Button>
                        <Button 
                            variant="outlined" 
                            color="primary" 
                            className={classes.button}>
                            Details
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}