import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Uploadfile from '../../components/uploadbtn'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 280,
  },
  //  uploadbutton: {
  //     margin: theme.spacing(1),
  //     width: 280,
  //   },
}));


export default function TextFields() {
  const classes = useStyles();



  return (
    
  <div >
    <div style={{ display: 'flex' }}>
      <Typography variant="h4" component="h3">
        Fill KYC from as an
    </Typography>
      <Button variant="outlined" className={classes.button}>
      Individual
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Corporate
      </Button>
    </div>
    <Typography variant="h5" component="h2">
      Section 1
    </Typography>
    <div style={{ display: 'grid' }}>

        <TextField
          id="outlined-password-input"
          label="NameOfTheEntity"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
       <TextField
          id="standard-name"
          label="ProofOfLicensing"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
             <TextField
          id="standard-name"
          label="CountryOfIncorporation"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
             <TextField
          id="standard-name"
          label="CountryOfIncorporation"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
      <Uploadfile/>
    </div>
    <div style={{ margin: 'auto' }}>
    <Button variant="contained" className={classes.button}>
        Cancel
        </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Save
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Send
      </Button>
      </div>
  </div>
  );
}