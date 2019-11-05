import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProfilePic from '../../assets/images/profilepic.jpg'
import SmileIcon from '../../assets/images/smile-icon.png'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    display: 'flex',
    marginTop: '100px',
    alignItems: "center",
  },
  media: {
    height: 140,
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: '120px',
    color: '#fff',
    backgroundColor: '#2a80c0'
  },
  pic: {
    marginLeft: 110
  },
  mediaCards:{
    marginTop:'200px',
    margin:'auto'
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

export default function CampaignCreator() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.mediaCards}>
      <Card className={classes.card}>
        <Avatar alt="Remy Sharp" src={ProfilePic} className={classes.bigAvatar} />
        <CardContent >
          <Typography variant="h5" component="h2" >
            UserName
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" >
            15 August, 2019
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardContent >
          <Typography gutterBottom variant="p" component="p" >
            The campaign will end on:
              10-10-2019
          </Typography>
        </CardContent>
      </Card>
      </div>
      <div className={classes.mediaCards}>
        <Card className={classes.card}>
          <CardContent >
            <img src={SmileIcon} alt="SmileIcon" width='70px' className={classes.pic} />
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent >
            <Typography gutterBottom variant="p" component="p" >
              recent donations (0)
          </Typography>
          </CardContent>
        </Card>
      </div>
      <Button variant="contained" className={classes.button} >
        Buy Token
         </Button>
    </div>
  );
}