import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      backgroundColor: "#867AE9",
      borderBottom: "1px solid black",
      height: "20%",
      width: "100%",
    },
    title: {
      color: "#fff",
      fontSize: "2.5rem",
      fontWeight: "lighter",
    },
  })
);

const NewTodoHeader: React.FunctionComponent = () => {
  /* Material-ui - classes */
  const classes = useStyles();

  return (
    <Grid
      className={classes.header}
      container
      item
      alignItems="center"
      justify="center"
    >
      <header>
        <Typography className={classes.title}>New Todo</Typography>
      </header>
    </Grid>
  );
};

export default NewTodoHeader;
