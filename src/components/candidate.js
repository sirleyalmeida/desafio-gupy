import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 2), 
    
  }
}));



export default function Candidate() {
  const classes = useStyles();

  return (
    <>
      <Grid xs={12}>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
