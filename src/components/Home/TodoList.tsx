import * as React from "react";
import { default as dayjs } from "dayjs";
import { List, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import DateRangeIcon from "@material-ui/icons/DateRange";
import TodoItem from "./TodoItem";

const useStyles = makeStyles(() =>
  createStyles({
    todoListContainer: {
      border: "1px solid black",
      borderRadius: "2px",
      marginTop: "4rem",
      marginLeft: "auto",
      marginRight: "auto",
      height: "600px",
      width: "600px",
    },
    todoListHeader: {
      backgroundColor: "#867AE9",
      borderBottom: "1px solid black",
      height: "20%",
    },
    todoListContent: {
      height: "80%",
      padding: "1rem 0",
      overflowY: "scroll",
    },
    todoList: {
      height: "100px",
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    currentDate: {
      color: "#fff",
      paddingLeft: "1rem",
    },
    datePicker: {
      color: "#fff",
      cursor: "pointer",
      paddingRight: "1rem",
    },
  })
);

const TodoList: React.FunctionComponent = () => {
  /* Material-UI - classes */
  const classes = useStyles();

  return (
    <Grid container className={classes.todoListContainer}>
      <Grid
        container
        item
        className={classes.todoListHeader}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Grid container item alignContent="center" lg={6}>
          <Typography className={classes.currentDate} align="center">
            {dayjs(new Date()).format("MMM D, YYYY")}
          </Typography>
        </Grid>
        <Grid container item alignContent="center" justify="flex-end" lg={6}>
          <DateRangeIcon className={classes.datePicker} fontSize="default" />
        </Grid>
      </Grid>
      {/* /.todoListHeader */}
      <Grid container item className={classes.todoListContent}>
        <List className={classes.todoList}>
          <TodoItem />
          <TodoItem />
        </List>
      </Grid>
    </Grid>
  );
};

export default TodoList;
