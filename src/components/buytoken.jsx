import React, {Component} from 'react'

import { Paper,Typography, Button, createStyles, withStyles } from '@material-ui/core'

const styles = theme => 
createStyles({
  root: {
    margin: '30px',
    display:'flex',
    justifyContent:'space-between',
    padding:'13px'
  },
  avatar: {
    margin: '10px',
  },
  typography: {
    color:'#5b29c7',
  }
})

class PaperSheet extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
        <div>
        <Typography component="h2"> {this.props.title} </Typography>
          {/* <Avatar alt="image" src={this.props.img} className={classes.avatar} /> */}
          <Typography component="h2" className={classes.typography}> {this.props.name} </Typography>
        </div>
       
          <div>
            <Typography component="h3" style={{color:'#5b29c7'}}>
              {this.props.currency}
            </Typography>
            <Typography component="h2" style={{color:'#5b29c7'}}> {this.props.description1} </Typography>
            <Typography component="h3" style={{color:'#5b29c7'}}>
              {this.props.description2}
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
                Buy Token
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(PaperSheet) ;
