import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  button: { 
    margin: theme.spacing(1),
    },
  
}));

export default function ContainedButtons({text, onClick}) {
  const classes = useStyles();

  return (
      <Button 
      variant="contained" 
      color="primary" 
      className={classes.button}
      onClick={onClick}
      >
      {text} 
        <Typography variant="h6" color="inherit" className={classes.navTitle}>
          Buscar Candidato                   
        </Typography>
      </Button>
  );
}
