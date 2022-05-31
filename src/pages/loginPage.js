import React from "react";
import Login from "../components/login";
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

const LoginPage = (props) => {
const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Header title={props.title} />
        </Grid>
      </Grid>
      <Login {...props} />
    </div>
  );
};

export default LoginPage;
