import React, { useContext } from "react";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { TodoContext } from "../../contexts/TodoContext";

interface Props {
  todo: TodoType;
}

type TodoType = { title: string; when: string };

const useStyles = makeStyles(() =>
  createStyles({
    todoItem: {
      border: "1px solid black",
      borderRadius: "5px",
      marginBottom: "1rem",
    },
    icon: {
      cursor: "pointer",
    },
  })
);

const TodoItem: React.FunctionComponent<Props> = ({ todo }) => {
  /* Material-ui - classes */
  const classes = useStyles();

  /* Context */
  const { moveUp, moveDown } = useContext(TodoContext);

  return (
    <>
      <ListItem dense className={classes.todoItem}>
        <Checkbox color="primary" />
        <ListItemText primary={todo.title} secondary={todo.when}></ListItemText>

        <ListItemSecondaryAction>
          <IconButton>
            <ArrowUpwardIcon
              onClick={() => moveUp(todo)}
              className={classes.icon}
              aria-label="arrow upward"
            />
          </IconButton>
          <IconButton>
            <ArrowDownwardIcon
              onClick={() => moveDown(todo)}
              className={classes.icon}
              aria-label="arrow downward"
            />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};

export default TodoItem;
