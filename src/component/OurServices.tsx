import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundImage: "url(/images/our-services.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "600px",
    },
    wrapper: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: "3rem 4.5rem 4.5rem",
      marginTop: "4rem",
    },
    buttonStyle: {
      borderRadius: 0,
      textTransform: "capitalize",
      marginTop: "1rem",
    },
  })
);

function OurServices() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.root} maxWidth={false}>
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item sm={6} md={5}>
            <div className={classes.wrapper}>
              <h6>Building The Future, Restoring The Past</h6>
              <h1>
                Individually Assess Each Plan And Offer Optimal Solutions!
              </h1>
              <p>
                Serving an impressive list of long-term clients with experience
                and expertise in multiple industries.
              </p>
              <Button
                variant="contained"
                color="secondary"
                className={classes.buttonStyle}
                disableElevation
              >
                Our Services
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default OurServices;
