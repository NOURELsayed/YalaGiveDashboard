// import React,{ Fragment } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';
// import ProfilePic from '../../assets/images/profilepic.jpg'
// import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import { Link } from 'react-router-dom'
// import { deepPurple } from '@material-ui/core/colors';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Button from '@material-ui/core/Button';
// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(1, 3),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
//     bigAvatar: {
//         width: 60,
//         height: 60,
//         margin:'auto'
//     },
//     grid: {
//         margin: 'auto'
//     },
//     img: {
//         marginLeft: '525px'
//     },
//     id: {
//         margin:'auto',
//     },
//     card: {
//         width: 300,
//         marginRight: '25px'
//     },
//     cards: {
//         display: 'flex',
//         marginTop: '20px',
//     },
//     secondcard: {
//         width: 930,
//     },
//     avatar: {
//         margin: 10,
//     },
//     purpleAvatar: {
//         margin: 10,
//         color: '#fff',
//         backgroundColor: deepPurple[500],
//     },

// }));

// export default function NestedGrid() {
//     const [open, setOpen] = React.useState(false);
//     const classes = useStyles();
  
//     const handleClick = () => {
//       setOpen(prev => !prev);
//     };
  
//     const handleClickAway = () => {
//       setOpen(false);
//     };


//     return (
//         <Grid className={classes.root}>
//             <Grid item xs={4} className={classes.img}>
//                 <Avatar alt="Remy Sharp" src={ProfilePic} className={classes.bigAvatar} />
//             </Grid>
//             <Grid item xs={4} className={classes.grid}>
//                 <Typography variant="h5" component="h2" >
//                     USER NAME
//                  </Typography>
//             </Grid>
//             <Grid item xs={4} className={classes.id}>
//                 <Paper className={classes.paper}>
//                     <Link> 0xd8d7...9ef2 </Link></Paper>
//             </Grid>
//             <div className={classes.cards}>
//                 <Card className={classes.card}>
//                     <CardContent>
//                         <Typography variant="h5" component="h2">
//                             About
//                         </Typography>
//                         <Typography className={classes.pos} color="textSecondary">
//                             English,Arabic
//                         </Typography>
//                     </CardContent>
//                 </Card>
//                 <Card className={classes.secondcard}>
//                     <CardContent>
//                         <Typography variant="h5" component="h2">
//                             Network state
//                         </Typography>
//                         <Grid container >
//                             <Avatar className={classes.avatar}>H</Avatar>
//                             <Avatar className={classes.purpleAvatar}>OP</Avatar>
//                             <Avatar className={classes.purpleAvatar}>OP</Avatar>
//                         </Grid>
//                     </CardContent>
//                 </Card>
//             </div>
//             <ClickAwayListener onClickAway={handleClickAway}>
//         <div>
//           <Button onClick={handleClick}>Open menu</Button>
//           {open ? (
//             <Fragment>
//               <table style={{
//                 fontFamily: "Trebuchet MS",
//                 borderCollapse: "collapse",
//                 width: "100%"
//               }}>
//                 <tr style={{
//                   backgroundColor: 'white',
//                   color: 'darkgray',
//                   height: '40px',
//                   border: 'inset'
//                 }}>
//                   <th>Token Details</th>
//                   <th >Issued Token</th>
//                   <th  > 
//                   <Button variant="contained" color="primary" className={classes.button}>
//                   Add New Token
//                     </Button></th>
//                 </tr>
//               </table>

//             </Fragment>
//           ) : null}
//         </div>
//       </ClickAwayListener>
//         </Grid>
//     );
// }


import React,{ Fragment } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// core components
import GridContainer from "../../components/Grid/GridContainer";
import Button from '@material-ui/core/Button';
import Card from "../../components/card/card";
import CardAvatar from "../../components/card/cardAvatar";
import CardBody from "../../components/card/cardBody";

import avatar from "../../assets/images/profilepic.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
    
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    // fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
  
    const handleClick = () => {
      setOpen(prev => !prev);
    };
  
    const handleClickAway = () => {
      setOpen(false);
    };
  return (
    <div>
      <GridContainer>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
          <ClickAwayListener onClickAway={handleClickAway}>
        <div>
           <Button variant="contained" color="primary"onClick={handleClick}>Open menu</Button>
           {open ? (
             <Fragment>
               <table style={{
                 fontFamily: "Trebuchet MS",
                 borderCollapse: "collapse",
                 width: "950px",
                 margin:'auto',
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
      </GridContainer>
    </div>
  );
}
