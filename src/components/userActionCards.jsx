import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Card, CardMedia, CardContent, CardActions, IconButton, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'

import Picture from '../assets/images/hands.jpg'


const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '30px',
    maxWidth: 320,
    borderTopStyle: 'solid',
    borderTopColor: '#3f51b5'
  },
  media: {
    paddingTop: '56.25%', 
    width:150,
    margin:'auto'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      </CardActions>
      <CardMedia
        className={classes.media}
        image={Picture}
        title="Paella dish"
      />
      <CardContent>
      <Typography  component="h3">
          This impressive paella is a perfect party .
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}