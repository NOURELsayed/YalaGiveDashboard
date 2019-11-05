
import React , { Fragment }from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Card, CardMedia, CardContent, CardActions, IconButton, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import Picture from '../../assets/images/hands.jpg'
import Copyright from '../../components/copyright'
import Header from '../../components/header'

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '30px',
    maxWidth: 290,
    borderTopStyle: 'solid',
    borderTopColor: '#3f51b5'
  },
  media: {
    paddingTop: '56.25%',
    width: 290,
    margin: 'auto'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  explorer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: "30px",
    marginBottom:'240px'
  },
  button: {
    margin: theme.spacing(1),
    float: 'right'
  },
  footer:{
    position: 'fixed',
    height: '50px',
    backgroundColor: 'red',
    bottom: '0px',
    left: '0px',
    right: '0px',
    marginBottom: '0px',
  }

}));

export default function Explorer() {
  const classes = useStyles();


  return (
    <Fragment>
      <Header/>
    <div className={classes.explorer}>
      <Card className={classes.card}>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
        <CardMedia
          className={classes.media}
          image={Picture}
          title="Paella dish" />
        <CardContent>
          <Typography component="h3">
            User Name
               </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and
             a fun meal to cook
                </Typography>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="p">
              Equilty offered
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              seeking
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Location
                   </Typography>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="p">
              100$
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              10.000$
                  </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Egypt
                 </Typography>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="p">
              Category
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Valuation
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Share price
                    </Typography>
          </div>
        </CardContent>
        <Button variant="outlined" color="primary" 
        component={Link} to="compaigndetails"
          className={classes.button}>
          Token details
            </Button>
      </Card>

      <Card className={classes.card}>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
        <CardMedia
          className={classes.media}
          image={Picture}
          title="Paella dish" />
        <CardContent>
          <Typography component="h3">
            User Name
               </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook
                </Typography>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="p">
              Equilty offered
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              seeking
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Location
                   </Typography>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="p">
              100$
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              10.000$
                  </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Egypt
                 </Typography>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="p">
              Category
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Valuation
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Share price
                    </Typography>
          </div>
        </CardContent>
        <Button variant="outlined" color="primary" 
          className={classes.button}
          component={Link} to="compaigndetails">
          Token details
            </Button>
      </Card>

      <Card className={classes.card}>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
        <CardMedia
          className={classes.media}
          image={Picture}
          title="Paella dish" />
        <CardContent>
          <Typography component="h3">
            Norhan Elsayed
                 </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook
                </Typography>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="p">
              Equilty offered
                     </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              seeking
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Location
                   </Typography>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="p">
              100$
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              10.000$
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Egypt
                   </Typography>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="p">
              Category
                   </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Valuation
                    </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Share price
                  </Typography>
          </div>
        </CardContent>
        <Button variant="outlined" color="primary" 
          className={classes.button}
          component={Link} to="compaigndetails">
          Token details
            </Button>
      </Card>
     
    </div>
   <Copyright className={classes.footer}/>
   </Fragment>
  );
}
