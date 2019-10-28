import React from 'react'

import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Avatar, Box, Grid, Tab, AppBar, Tabs, Icon } from '@material-ui/core'

import UserActionCards from '../../components/userActionCards'
import VerificationSteps from './verification'

import Picture from '../../assets/images/profilepic.jpg'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}>
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
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    user: {
        display: 'inline-flex',
        alignItems: 'center',
        marginLeft: '600px'
    }
}));
const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles(theme => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textcolor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example">

                    <Tab label="Charties" {...a11yProps(0)} />
                    <Tab label="MarketPlace" {...a11yProps(1)} />
                    <Tab label="Portfolio" {...a11yProps(2)} />

                    <div className={classes.user}>
                        <Avatar alt="image" src={Picture} />
                     <div>
                        <Typography component="h2" variant='h6' style={{padding: '0px 10px 0px 10px'}}
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            User Name
                        </Typography>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose} >
                            <StyledMenuItem>
                            <ListItemText primary="Your profile" />
                            </StyledMenuItem>

                            <StyledMenuItem>
                    <Link to="/dashboard/userprofile">
                         <ListItemText primary="Admin Dashboard" /></Link>       
                            </StyledMenuItem>

                            <StyledMenuItem>
                            <ListItemText primary="Sign Out" />
                            </StyledMenuItem>
                        </StyledMenu>
                        </div>
                        <Icon>notifications_none</Icon>
                    </div>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <UserActionCards />
                    </Grid>
                    <Grid item xs>
                        <UserActionCards />
                    </Grid>
                    <Grid item xs>
                        <UserActionCards/>
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                <VerificationSteps/>
            </TabPanel>

        </div>
    );
}