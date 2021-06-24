import React from "react";
import { Grid } from "@material-ui/core";
import NewTodoContainer from "../components/Create/NewTodoContainer";

const Create: React.FunctionComponent = () => {
  return (
    <Grid container>
      <NewTodoContainer />
    </Grid>
  );
};

export default Create;
