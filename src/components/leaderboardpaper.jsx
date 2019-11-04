import React, { Component } from 'react';
import { Avatar, Typography, Divider } from '@material-ui/core'


class leaderboardPaper extends Component {
    render() {
        return (
            <div style={{ display:'flex', flexDirection: 'row', padding: '10px' }}>
                <Typography component="h2" style={{ color: '#5b29c7' }}> {this.props.id} &nbsp;</Typography>
                <Avatar alt="image" src={this.props.img} />
                <Typography component="h2" style={{ color: '#5b29c7' }}> &nbsp; {this.props.name} &nbsp;</Typography>
                <Typography component="h2" style={{ color: '#5b29c7', right: '240px'}}> {this.props.currency} </Typography>
                <Divider /> 
            </div>
        )
    }
}

export default leaderboardPaper;