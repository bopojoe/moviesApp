import React from "react";
import Register from "../components/registration";

import Header from "../components/blankHeader";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#bfbfbf",
    minHeight: "100vh",
    paddingTop: theme.spacing(7),
  },
}));
const RegisterPage = (props) => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Header title={props.title} />
        </Grid>
      </Grid>
      <Register {...props} />
    </div>
  );
};

export default RegisterPage;
