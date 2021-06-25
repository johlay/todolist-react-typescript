import * as React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { CardMedia, Grid } from "@material-ui/core";
import logo from "../../assets/logo/logo.png";

const useStyles = makeStyles(() =>
  createStyles({
    navContainer: {
      backgroundColor: "#C449C2",
      height: "100px",
    },
    navLink: {
      color: "#fff",
      textDecoration: "none",
    },
    activeNavLink: {
      textDecoration: "underline",
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
        <NavLink exact to="/">
          <CardMedia className={classes.logo} image={logo} />
        </NavLink>
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
        <NavLink
          activeClassName={classes.activeNavLink}
          className={classes.navLink}
          exact
          to="/"
        >
          Start
        </NavLink>

        <NavLink
          activeClassName={classes.activeNavLink}
          className={classes.navLink}
          exact
          to="/create"
        >
          Create Todo
        </NavLink>

        <NavLink
          activeClassName={classes.activeNavLink}
          className={classes.navLink}
          exact
          to="/about"
        >
          About
        </NavLink>
      </Grid>
      {/* /.right_wrapper */}
    </Grid>
  );
};

export default Navbar;
