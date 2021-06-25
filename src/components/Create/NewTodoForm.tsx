import React, { useContext } from "react";
import { Input, InputLabel, InputAdornment, Grid } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ListIcon from "@material-ui/icons/List";
import ScheduleIcon from "@material-ui/icons/Schedule";
import NewTodoButtons from "./NewTodoButtons";
import { TodoContext } from "../../contexts/TodoContext";

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      height: "70%",
      width: "100%",
    },
    inputFieldContainer: {
      height: "80%",
    },
    inputFieldWrapper: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "90%",
    },
    icons: {
      cursor: "auto",
    },
  })
);

const NewTodoForm: React.FunctionComponent = () => {
  /* Material-ui - classes */
  const classes = useStyles();

  /* Context */
  const { create } = useContext(TodoContext);

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <Grid
        container
        item
        alignContent="space-around"
        className={classes.inputFieldContainer}
      >
        <Grid item className={classes.inputFieldWrapper}>
          <InputLabel htmlFor="new-todo">Todo</InputLabel>
          <Input
            fullWidth
            id="new-todo"
            aria-describedby="my-helper-text"
            endAdornment={
              <InputAdornment position="end">
                <ListIcon className={classes.icons} />
              </InputAdornment>
            }
          />
        </Grid>
        {/* /todo */}
        <Grid item className={classes.inputFieldWrapper}>
          <InputLabel htmlFor="date">When</InputLabel>
          <Input
            fullWidth
            id="date"
            aria-describedby="date"
            endAdornment={
              <InputAdornment position="end">
                <ScheduleIcon className={classes.icons} />
              </InputAdornment>
            }
          />
        </Grid>
        {/* /when */}
      </Grid>
      {/* /.inputFieldContainer */}
      <NewTodoButtons />
    </form>
  );
};

export default NewTodoForm;
