import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

import clsx from "clsx"

import {
  withStyles,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Button
} from "@material-ui/core"

import { compose } from "recompose"

import profilePic from "../assets/images/profilepic.jpg"

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: 36
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  button: {
    color: '#ffffff',
    fontWeight: 'bold',
    // display: 'flex',
    // marginLeft: "auto",
    // justifyContent: 'flex-end' ,
    input: {
      display: 'none',
    },  
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  bold: {
    fontWeight: 600
  },
});

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    
    const {
      classes,
      location: { pathname }
    } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: this.state.open
          })}
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              {this.props.title}
            </Typography>
            <Button component={Link} to={'/leaderboard'} variant="outlined" color="primary" className={classes.button}>
             Leaderboard
          </Button>
          <Button component={Link} to={'/'} variant="outlined" color="primary" className={classes.button}>
          Explorer
          </Button>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles)
)(Layout);
