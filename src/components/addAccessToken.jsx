import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Button, TextField, Typography } from '@material-ui/core'

import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen} >
        Create Token
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Create Asset Token
        </DialogTitle>
        <DialogContent dividers>
                  <TextField                 
                    autoFocus
                    margin="dense"
                    id="tokenName"
                    label="Token Name"
                    fullWidth
                    required
                  />
                  <TextField
                    autoComplete="tokenSymbol"
                    margin="dense"
                    variant="filled"
                    required
                    fullWidth
                    id="tokenSymbol"
                    label="Token Symbol"
                  />
                  <TextField 
                    autoComplete="tokenSupply"
                    margin="dense"
                    variant="filled"
                    required
                    fullWidth
                    id="tokenSupply"
                    label="Token Decimals"
                  />
                  <TextField
                    autoComplete="ataaCoin"
                    margin="dense"
                    variant="filled"
                    required
                    fullWidth
                    id="ataaCoin"
                    label="AtaaCoin"
                  />
                  <TextField
                    autoComplete="price"
                    margin="dense"
                    variant="filled"
                    required
                    fullWidth
                    id="price"
                    label="Price"
                  />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}