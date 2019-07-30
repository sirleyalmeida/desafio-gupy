import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ContainedButtons from './button.js';
import CustomizedInputBase from './inputSearch.js';

const useStyles = makeStyles({
    root: {
        padding: '10px 0px',
    },
});

export default function SearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container
                alignContent="flex-start">
                <CustomizedInputBase />
                <ContainedButtons />
            </Grid>
        </div >
    );
}