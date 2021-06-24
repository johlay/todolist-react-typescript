import React from "react";
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

const TodoItem: React.FunctionComponent = () => {
  /* Material-ui - classes */
  const classes = useStyles();

  return (
    <>
      <ListItem dense className={classes.todoItem}>
        <Checkbox color="primary" />
        <ListItemText
          primary="Daily meeting with teams"
          secondary={`When: today at 2.30 am`}
        ></ListItemText>

        <ListItemSecondaryAction>
          <IconButton>
            <ArrowUpwardIcon
              className={classes.icon}
              aria-label="arrow upward"
            />
          </IconButton>
          <IconButton>
            <ArrowDownwardIcon
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
