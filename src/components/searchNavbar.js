import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ContainerInputAndButton from './inputAndButtonSearch.js';

const useStyles = makeStyles({
  root: {
    flexGrow: 30,
    padding: 15,
  },
});

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Grid container
            direction="column"
            justify="flex-start"
            wrap-xs-nowrap="true">
            <Typography variant="h6" color="inherit">
              <div className="navsearch-text">
                Buscar Candidato    -
                 </div>
            </Typography>
            <div>
              <ContainerInputAndButton />
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </div >
  );
}