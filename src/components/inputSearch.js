import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: 600,
    height: 34,
  },
  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: '0.875rem',
    color: 'grey',
  },
  iconButton: {
    padding: 10,
    color: 'black',
    fontSize: '0.875rem',
  },
});

// const filterName = document.querySelector("className={classes.iconButton}");
// filterName.addEventListener("click", (event) => {
//   event.preventDefault();
//   let newArray = [];
//   if (newArray.length === 0) {
//     alert("Campo vazio");
//   }
//   let filteredNames = document.querySelector("className={classes.input}");

//   return (
//     <TableApplicate>

//     </TableApplicate>
//   )

// })

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Buscar candidato por nome"
        inputProps={{ 'aria-label': 'Search Google Maps' }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <i class="material-icons" color="primary">search</i>
      </IconButton>
    </Paper>
  );
}