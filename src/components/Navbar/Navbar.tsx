import * as React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { CardMedia, Grid, Link } from "@material-ui/core";
import logo from "../../assets/logo/logo.png";

const useStyles = makeStyles(() =>
  createStyles({
    navContainer: {
      backgroundColor: "#C449C2",
      height: "100px",
    },
    navLink: {
      color: "#fff",
    },
    logo: {
      borderRadius: "2px",
      marginLeft: "2rem",
      height: "60px",
      width: "60px",
    },
  })
);

const Navbar: React.FunctionComponent = () => {
  /* Material UI - classes */
  const classes = useStyles();

  return (
    <Grid className={classes.navContainer} container>
      <Grid
        container
        item
        md={9}
        justify={"flex-start"}
        alignContent={"center"}
      >
        <Link href="/">
          <CardMedia className={classes.logo} image={logo} />
        </Link>
      </Grid>
      {/* /.left_wrapper */}
      <Grid
        direction={"row"}
        justify={"space-around"}
        alignContent={"center"}
        container
        item
        md={3}
      >
        <Link className={classes.navLink} href="/">
          Start
        </Link>

        <Link className={classes.navLink} href="/create">
          Create Todo
        </Link>

        <Link className={classes.navLink} href="/about">
          About
        </Link>
      </Grid>
      {/* /.right_wrapper */}
    </Grid>
  );
};

export default Navbar;
