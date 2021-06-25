import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      "&:hover": {
        backgroundColor: "#867AE9",
      },
    },
    buttonsContainer: {
      height: "30%",
      width: "100%",
    },
    buttonWrapper: {},
  })
);

const NewTodoButtons: React.FunctionComponent = () => {
  /* Material-ui - classes */
  const classes = useStyles();

  return (
    <Grid
      container
      item
      alignContent="center"
      justify="space-around"
      className={classes.buttonsContainer}
    >
      <Grid item className={classes.buttonWrapper}>
        <Button
          type={"reset"}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Reset
        </Button>
      </Grid>
      <Grid item className={classes.buttonWrapper}>
        <Button
          type={"submit"}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewTodoButtons;
