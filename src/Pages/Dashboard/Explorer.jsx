
import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Card, CardMedia, CardContent, CardActions, IconButton, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import Picture from '../../assets/images/hands.jpg'


const useStyles = makeStyles(theme => ({
    card: {
        marginTop: '30px',
        maxWidth: 290,
        borderTopStyle: 'solid',
        borderTopColor: '#3f51b5'
    },
    media: {
        paddingTop: '56.25%',
        width: 80,
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
    explorer:{
        display: 'flex',
    justifyContent: 'space-around',
    },
    button: {
        margin: theme.spacing(1),
        float:'right'
      },

}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    return (<div className={classes.explorer}>
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
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
         <Link to="/useraction">
         <Button   variant="contained" color="primary" className={classes.button}>
            Token details
                    </Button>
         </Link>  
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
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
            <Button variant="contained" color="primary" className={classes.button}>
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
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
            <Button variant="contained" color="primary" className={classes.button}>
                        Token details
                    </Button>
        </Card>
    </div>
    );
}