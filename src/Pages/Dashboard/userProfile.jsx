import React,{ Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ProfilePic from '../../assets/images/profilepic.jpg'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom'
import { deepPurple } from '@material-ui/core/colors';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // marginLeft: '430px'
    },
    paper: {
        padding: theme.spacing(1, 3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    bigAvatar: {
        // margin: 10,
        width: 60,
        height: 60,
        // marginLeft: '120px'
    },
    grid: {
        // margin: 'auto'
        marginLeft:'460px'
    },
    img: {
        marginLeft: '525px'
    },
    id: {
        marginLeft: '360px'
    },
    card: {
        width: 300,
        marginRight: '25px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    cards: {
        display: 'flex',
        marginTop: '20px',
    },
    secondcard: {
        width: 930,
    },
    avatar: {
        margin: 10,
    },
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
    },

}));

export default function NestedGrid() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
  
    const handleClick = () => {
      setOpen(prev => !prev);
    };
  
    const handleClickAway = () => {
      setOpen(false);
    };


    return (
        <Grid className={classes.root}>
            <Grid item xs={4} className={classes.img}>
                <Avatar alt="Remy Sharp" src={ProfilePic} className={classes.bigAvatar} />
            </Grid>
            <Grid item xs={4} className={classes.grid}>
                <Typography variant="h5" component="h2" >
                    USER NAME
                 </Typography>
            </Grid>
            <Grid item xs={4} className={classes.id}>
                <Paper className={classes.paper}>
                    <Link> 0xd8d7...9ef2 </Link></Paper>
            </Grid>
            <div className={classes.cards}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            About
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            English,Arabic
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.secondcard}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Network state
                        </Typography>
                        <Grid container >
                            <Avatar className={classes.avatar}>H</Avatar>
                            <Avatar className={classes.purpleAvatar}>OP</Avatar>
                            <Avatar className={classes.purpleAvatar}>OP</Avatar>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
            <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <Button onClick={handleClick}>Open menu</Button>
          {open ? (
            <Fragment>
              <table style={{
                fontFamily: "Trebuchet MS",
                borderCollapse: "collapse",
                width: "100%"
              }}>
                <tr style={{
                  backgroundColor: 'white',
                  color: 'darkgray',
                  height: '40px',
                  border: 'inset'
                }}>
                  <th>Token Details</th>
                  <th >Issued Token</th>
                  <th  > 
                  <Button variant="contained" color="primary" className={classes.button}>
                  Add New Token
                    </Button></th>
                </tr>
              </table>

            </Fragment>
          ) : null}
        </div>
      </ClickAwayListener>
        </Grid>
    );
}


