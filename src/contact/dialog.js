import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@material-ui/icons/Close';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));



const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
 
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function CustomizedDialogs({children}) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <div className='buton'>
      <Button style={{marginTop:20, color:'black', textDecoration:'solid'}} variant="outlined"  onClick={handleClickOpen}>
        Description
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
      
        <BootstrapDialogTitle style={{textAlign:"center"}} id="customized-dialog-title" onClose={handleClose}>
            Contact:
            813-842-1055
            celestetinsleysalgado@gmail.com   
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {children}
        </DialogContent>
      </BootstrapDialog>
    </div>
    
  );
}