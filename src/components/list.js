import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import Candidate from './candidate';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 2), 
    margin: theme.spacing(4, 2)
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <>
      <Grid xs={12}>
        <Paper className={classes.root}>
        <Candidate>
            </Candidate> 
        </Paper>
      </Grid>
    </>
  );
}
