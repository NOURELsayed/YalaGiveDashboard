import React from "react"

import { makeStyles } from "@material-ui/core"
import InvestmentTable from '../../components/investmentTable'
import { Paper, Button, Typography, ClickAwayListener } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex', 
        flexDirection: 'row', 
        padding: '25px 25px 50px 25px'
    },
    button: {
        position: 'absolute', 
        float: 'right',
        right: '40px'
    },
    table: {
        display: 'flex',
        flexDirection: 'row',
        padding: '15px',
        marginTop: '20px'
    }
}));


export default function ClickAway() {

    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClick = () => {
        setOpen(prev => !prev);
    };

    return (
        <div>
            <ClickAwayListener>
                <div>
                    <Paper className={classes.root}>
                        <Typography variant="h6" color='primary'>Investments</Typography>

                        <Button variant="outlined" 
                                color="primary" 
                                onClick={handleClick} 
                                className={classes.button}>
                            Add Investment
                        </Button>
                        {open ? (
                            <div className={classes.table}>
                                <InvestmentTable/>
                            </div>
                        ) : null}
                    </Paper>
                </div >
            </ClickAwayListener>
        </div >
    );
}