import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import searchIcon from './assets/searchIcon.png';
import TableApplicate from './tableApplicate';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
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
      <IconButton className={classes.iconButton} aria-label="Menu">
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Buscar candidato por nome"
        inputProps={{ 'aria-label': 'Search Google Maps' }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
      </IconButton>
      <Divider className={classes.divider} />
      <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
        <img
          src={searchIcon}
          alt="search icon"
          width={30}
          className={classes.imgLogo}
        />
      </IconButton>
    </Paper>
  );
}