import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import logo from './assets/logo-gupy.png';



const useStyles = makeStyles({
  root: {
   flexGrow: 1,
  },
  navTitle: {
    fontSize: 20,
  },
  imgLogo: {
    margin: 2,
  },
  divider: {
    width: 3,
    height: 45,
    margin: 4,
  },
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       
        <AppBar position="static" color="default">
            <Toolbar>
                <img
                    src={logo}
                    alt="logo gupy"
                    className={classes.imgLogo}
                />
                <Divider className={classes.divider} />
                <Typography variant="h6" color="inherit" className={classes.navTitle}>
                    Casting for Game of Thrones                   
                </Typography>
            </Toolbar>
        </AppBar>
       
    </div>
    
  );
}

