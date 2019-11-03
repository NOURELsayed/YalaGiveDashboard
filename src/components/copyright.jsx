import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(  ({
  youtube: {
    color: '#eb3223'
  },

  facebook: {
    color: '#4968ad'
  },

  twitter: {
    color: '#49a1eb'
  },

  instagram: {
    color: 'black'
  }

}));
export default function Copyright() {
  const classes = useStyles();
  const companyDetails = {
    title: "PentaValue",
    url: "https://pentavalue.com"
  }

  return (<div>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={companyDetails.url}>
        {companyDetails.title}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    
    <div align="center" >
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className={classes.facebook}
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className={classes.twitter}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className={classes.instagram}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.youtube.com/c/jamesqquick"
        className={classes.youtube}
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
    </div>
  </div>
  );
}