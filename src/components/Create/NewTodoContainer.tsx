import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import NewTodoHeader from "./NewTodoHeader";
import NewTodoForm from "./NewTodoForm";

const useStyles = makeStyles(() =>
  createStyles({
    todoContainer: {
      border: "1px solid black",
      borderRadius: "2px",
      marginTop: "4rem",
      marginLeft: "auto",
      marginRight: "auto",
      height: "600px",
      width: "600px",
    },
  })
);

const NewTodoContainer: React.FunctionComponent = () => {
  /* Material-ui - classes */
  const classes = useStyles();

  return (
    <Grid container className={classes.todoContainer}>
      <NewTodoHeader />
      <NewTodoForm />
    </Grid>
  );
};

export default NewTodoContainer;
