

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {TextField,Grid,Card,Button} from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  Card: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
    display:'grid',
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        
      <Grid item xs>
          <Card className={classes.Card}>
          <Typography variant="h4" component="h4">
          buy off chain
          </Typography>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="from Bank"
          margin="normal"
        />
          <TextField
          id="standard-basic"
          className={classes.textField}
          label="Amount"
          margin="normal"
        />
          <TextField
          id="standard-basic"
          className={classes.textField}
          label="proof of payment"
          margin="normal"
        />
        <Button variant="contained" color="primary" className={classes.button}>
        submit
      </Button>
          </Card>
        </Grid>

      </TabPanel>
      <TabPanel value={value} index={1}>
       
      <Grid item xs>
          <Card className={classes.Card}>
          <Typography variant="h4" component="h4">
          buy with ATAA
          </Typography>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="from Bank"
          margin="normal"
        />
          <TextField
          id="standard-basic"
          className={classes.textField}
          label="proof of payment"
          margin="normal"
        />
        <Button variant="contained" color="primary" className={classes.button}>
        submit
      </Button>
          </Card>
        </Grid>

      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid item xs>
          <Card className={classes.Card}>
          <Typography variant="h4" component="h4">
          Exchange
          </Typography>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Token to buy"
          margin="normal"
        />
          <TextField
          id="standard-basic"
          className={classes.textField}
          label="Token to sell"
          margin="normal"
        />
           <TextField
          id="standard-basic"
          className={classes.textField}
          label="Amount"
          margin="normal"
        />
        <Button variant="contained" color="primary" className={classes.button}>
        submit
      </Button></Card>
        </Grid>

      </TabPanel>
    </div>
  );
}