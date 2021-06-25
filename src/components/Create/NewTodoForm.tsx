import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
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

type INewTodo = { title: string; when: string };

const NewTodoForm: React.FunctionComponent = () => {
  /* Material-ui - classes */
  const classes = useStyles();

  /* useState */
  const [newTodo, setNewTodo] = useState<INewTodo>({
    title: "",
    when: "",
  });

  /* Context */
  const { create } = useContext(TodoContext);

  /* useHistory */
  const history = useHistory();

  /* Handlers */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default event.
    e.preventDefault();

    // Create function is invoked.
    create(newTodo);

    // Re-directs user to start page.
    history.push("/");
  };

  const handleInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({ ...newTodo, title: e.target.value });
  };

  const handleInputWhen = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({ ...newTodo, when: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className={classes.form}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        item
        alignContent="space-around"
        className={classes.inputFieldContainer}
      >
        <Grid item className={classes.inputFieldWrapper}>
          <InputLabel htmlFor="new-todo">Todo</InputLabel>
          <Input
            value={newTodo.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleInputTodo(e);
            }}
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
            value={newTodo.when}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleInputWhen(e);
            }}
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
