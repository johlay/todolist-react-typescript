import * as React from "react";
import { Grid } from "@material-ui/core";
import TodoList from "../components/Home/TodoList";

const Home: React.FunctionComponent = () => {
  return (
    <Grid container>
      <TodoList />
    </Grid>
  );
};

export default Home;
