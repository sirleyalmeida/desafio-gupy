import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ContainedButtons from './button.js';
import CustomizedInputBase from './inputSearch.js';
import { positions } from '@material-ui/system';


const useStyles = makeStyles({
  root: {
   flexGrow: 30,
  },

});

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                       Buscar Candidato                   
                </Typography>
               <CustomizedInputBase/>
               <ContainedButtons/>
               
            </Toolbar>
        </AppBar>
       
    </div>
    
  );
}

