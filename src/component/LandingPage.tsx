import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundImage: "url(/images/welding-industry.jpg)",
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
      backgroundColor: "#ff7607",
      textTransform: "capitalize",
      color: "white",

      [theme.breakpoints.down("md")]: {
        marginBottom: "10%",
        fontSize: "16px",
      },
      [theme.breakpoints.up("md")]: {
        marginTop: "5%",
        height: "13%",
        width: "18%",
        fontSize: "20px",
        marginLeft: "5%",
      },
    },
    typoStyle: {
      color: "white",

      [theme.breakpoints.up("md")]: {
        marginTop: "2%",
        marginLeft: "5%",
        width: "800px"

      },
      [theme.breakpoints.down("md")]: {
        marginTop: "10%",
        marginBottom: "10%",
      },
    },
    headingStyle: {
      [theme.breakpoints.up("md")]: {
        marginLeft: "5%",
        color: "white",
        marginTop: "20%",
        width: "800px"
      },
      [theme.breakpoints.down("md")]: {
        color: "white",
        marginTop: "20%",
      },
    },
  })
);

function LandingPage() {
  const classes = useStyles();

  return (
    <div>
      {/* <Hidden mdDown> */}
      <Container className={classes.root} maxWidth={false}>
        <Grid container xs={12}>
          <Grid item sm={6}></Grid>

          <Grid item sm={6} md={8} >
            <Typography variant="h3" className={classes.headingStyle}>
              Industry leaders in CNC Wirecut EDM machines & Electronic Systems.            </Typography>

            <Typography variant="h5" className={classes.typoStyle}>
              We offer a mammoth range of state of the art products in EDM technology, with countrywide network of sales,
              service & technical support.
            </Typography>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.buttonStyle}
                disableElevation
              >
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default LandingPage;
