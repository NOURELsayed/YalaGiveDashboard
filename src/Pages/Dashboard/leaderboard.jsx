import React, { Component, Fragment } from 'react'

import Switch from '../../components/switch'
import profilePic from "../../assets/images/profilepic.jpg"
import Leaderboardpaper from "../../components/leaderboardpaper"
import { Paper, Grid, createStyles, withStyles } from '@material-ui/core'



const styles = theme => 
  createStyles({
    root: {
        backgroundColor: '#6D5BD5', 
        height: '50vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: 'auto', 
        zIndex: 'auto'
    },
    paper:{
        margin: 'auto',
        padding: '15px', 
        height: '350px', 
        overflowY: 'scroll', 
        position: 'relative', 
        top:'-70px', 
        zIndex: 45
    },
    div:{
        backgroundColor: '#ffffff'
    }
})

const paperArr = [
    {
        id: 1,
        img: profilePic,
        name:"Mariam Darwish",
        currency:"30$",
    },
    {
        id: 2,
        img: profilePic,
        name:"Norhan Elsayed",
        currency:"34$",
    },
    {
        id: 3,
        img: profilePic,
        name:"Nasr Mohamed",
        currency:"89$",
    },
    {
        id: 4,
        img: profilePic,
        name:"hussen Abdelaal",
        currency:"80$",
    },
    {
        id: 5,
        img: profilePic,
        name:"Abdelazeem Mohamed",
        currency:"70$",
    },
    {
        id: 6,
        img: profilePic,
        name:"Ghaithaa Salah",
        currency:"70$",
    },
    {
        id: 7,
        img: profilePic,
        name:"Mohamed Ghamry",
        currency:"70$",
    },
]


class leaderboard extends Component {
    render() {

        const { classes } =this.props;

        const PapersList = paperArr.map((paper) =>
        <Leaderboardpaper key={paper.id} {...paper} />
    );
        return (
            <Fragment>
                <div className={classes.root}>
                    <Switch />
                </div>
                <div className={classes.div} >
                    <Paper component={Grid} item md={8} className={classes.paper}>
                        {PapersList}
                    </Paper>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles)(leaderboard)