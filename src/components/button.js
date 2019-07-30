import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  button: {
    margin: '0px 10px 10px 20px',
    background: '#304ffe',
    'text-transform': 'none',
  },
}));

export default function ContainedButtons({ text, onClick }) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={onClick}
    >
      {text}
      <Typography variant="text" color="inherit" className={classes.navTitle}>
        Buscar candidato
        </Typography>
    </Button>
  );
}
