import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProfilePic from '../assets/images/profilepic.jpg'
import SmileIcon from '../assets/images/smile-icon.png'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    display: 'flex',
    marginTop: '150px',
     alignItems:"center",
  },
  media: {
    height: 140,
  },
  button: {
    margin: theme.spacing(1),
    marginLeft:'120px'
},
}));

export default function CampaignCreator() {
  const classes = useStyles();

  return (<div>

     <Card className={classes.card}>
      <Avatar alt="Remy Sharp" src={ProfilePic} className={classes.bigAvatar} />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2" >
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

    <Card className={classes.card}>
        <CardContent >
        <img src={SmileIcon} alt="SmileIcon" width='70px' align='center'/>
        </CardContent>
    </Card>

    <Card className={classes.card}>
        <CardContent >
          <Typography gutterBottom variant="p" component="p" >
          recent donations (0)
          </Typography>
        </CardContent>
    </Card> 

    <Button variant="contained" color="primary" className={classes.button} >
         Buy Token
         </Button>
    </div>
  );
}