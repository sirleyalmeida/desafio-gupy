import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import logo from './assets/logo-gupy.png';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,

    // display: "flex",
    // position: "relative",
    // alignItems: "center",
    // justifyContent: "space-between"
  },
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <>
        <Grid xs={12}>

        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
                <img
                    src={logo}
                    alt="logo gupy"
                />
                {/* <img
                    src={logo}
                    alt="logo gupy"
                    width={70}
                    className={classes.imgLogo}
                /> */}
              <Typography variant="h6" color="inherit">
                Photos
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        </Grid>
    </>
  );
}

