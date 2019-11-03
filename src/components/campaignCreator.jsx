import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProfilePic from '../assets/images/profilepic.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    display: 'flex',
    marginTop: '150px',
     alignItems:"center",
  },
  media: {
    height: 140,
  },
});

export default function CampaignCreator() {
  const classes = useStyles();

  return (<div>
    <Card className={classes.card}>
      <Grid container justify="center" alignItems="center"  display="flex">
      <Avatar alt="Remy Sharp" src={ProfilePic} className={classes.bigAvatar} />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2" >
            UserName
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
          15 August, 2019
          </Typography>
        </CardContent>
        </Grid>
    </Card>
    <Card className={classes.card}>
      <Grid container justify="center" alignItems="center"  display="flex">
        <CardContent >
          <Typography gutterBottom variant="p" component="p" >
          The campaign will end on:
            10-10-2019
          </Typography>
        </CardContent>
        </Grid>
    </Card>
    <Card className={classes.card}>
      <Grid container justify="center" alignItems="center"  display="flex">
        <CardContent >
          <Typography gutterBottom variant="p" component="p" >
          recent donations (0)
          </Typography>
        </CardContent>
        </Grid>
    </Card>
    </div>
  );
}