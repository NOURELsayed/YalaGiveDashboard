import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    loader: {
        color:'primary', 
        variant: 'indeterminate' ,
        thickness: 20,
        size: '10rem',
        display: 'inlineBlock',
        position: 'relative',
        marginTop: '250px',
        marginLeft: '600px',
    }
  }));


export default function CircularUnderLoad() {
    const classes = useStyles();
    return  <CircularProgress className={classes.loader} />;
}