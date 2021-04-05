import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundImage: "url(/images/industic11.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "600px",
      backgroundColor: "green",
      background: "linear-gradient(to right,#3204fdba, #9907facc)",
    },
  })
);

function RequestAQuote() {
  const classes = useStyles();

  return (
    <div>
      <Grid container xs={12}>
        <Grid item xs={3} className={classes.root}></Grid>
      </Grid>
    </div>
  );
}

export default RequestAQuote;
