import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import videoImg from "./../videoImg.jpg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    // wrapper: {
    //   backgroundColor: theme.palette.primary.main,
    //   color: theme.palette.primary.contrastText,
    //   paddingBottom: "2rem",
    //   paddingLeft: "1rem",
    //   marginTop: "10rem",
    //   width: "5rem",
    // },
    typoStyle: {
      margin: "10% 5% 10% 8%",
      fontWeight: 400
    },
    // overWrapper: {
    //   backgroundColor: theme.palette.primary.main,
    //   color: theme.palette.primary.contrastText,
    //   paddingBottom: "2rem",
    //   //   marginTop: "25rem",
    //   paddingTop: "-20rem",
    //   width: "15rem",
    //   height: "5rem",
    //   paddingLeft: "2rem",
    // },
    iconStyle: {
      [theme.breakpoints.down("md")]: {
        marginLeft: "17%",
        paddingBottom: "2%",
      }
    },
    imgStyle: {
      [theme.breakpoints.up("md")]: {
        height: "70%",
        width: "100%"
      },
      [theme.breakpoints.down("sm")]: {
        height: "80%",
        // width: "60%",
        marginLeft: "14%"
      },

    },
    CssWrapper: {
      position: "absolute",
      height: "300px",
      backgroundColor: "#ff7607",

      [theme.breakpoints.up("md")]: {

        width: "210px",
        bottom: "115px",
        left: "-45px",
        zIndex: -1
      },
      [theme.breakpoints.only('md')]: {
        width: "210px",
        bottom: "175px",
        left: "-45px",
        zIndex: -1
      },
      [theme.breakpoints.down("sm")]: {
        width: "210px",
        bottom: "46px",
        left: "-29px",
        zIndex: -1
      }

    }
  })
);

function About() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.root} maxWidth={false}>
        <Grid container xs={12}>
          <Grid item xs={12} justify="center">
            <Typography
              variant="h4"
              style={{
                marginTop: "4%",
                textAlign: "center",
              }}
            >
              A leading industrial & manufacturing company, serving since 1989{" "}
            </Typography>
            <Grid container xs={12}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" className={classes.typoStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
              </Grid>
              <Grid
                container
                item
                xs={12}
                md={5}
                style={{ marginTop: "3%" }}
                justify="center"
              >

                <div style={{ position: "relative" }}>
                  <div className={classes.CssWrapper}></div>
                  <img className={classes.imgStyle} src={videoImg} alt="About Company" />
                </div>
              </Grid>
              <Grid container xs={12} md={3} spacing={3} style={{ padding: "0%", marginTop: "1%", marginBottom: "1%" }}>
                {/* Quality */}
                <Grid item xs={12} className={classes.iconStyle} >
                  <List>
                    <ListItem style={{ paddingLeft: "0%" }}>
                      <ListItemIcon style={{ minWidth: "35px" }}>
                        <FiberManualRecordIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="h5" >
                          Quality
                      </Typography>
                      </ListItemText>
                    </ListItem>
                  </List>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">
                      Following are the quality of our services thus having
                      gained trust of many clients.So no need to worry about
                      quality!
                      </Typography>
                  </Grid>
                </Grid>

                {/* Reliability */}
                <Grid item xs={12} className={classes.iconStyle} >
                  <List>
                    <ListItem style={{ paddingLeft: "0%" }}>
                      <ListItemIcon style={{ minWidth: "35px" }}>
                        <FiberManualRecordIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="h5" >
                          Reliability
                      </Typography>
                      </ListItemText>
                    </ListItem>
                  </List>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" >
                      We have established a corporate mandate to maintain
                      strong core values that truely affect.
                      </Typography>
                  </Grid>
                </Grid>
                {/* Innovation */}
                <Grid item xs={12} className={classes.iconStyle} >
                  <List>
                    <ListItem style={{ paddingLeft: "0%" }}>
                      <ListItemIcon style={{ minWidth: "35px" }}>
                        <FiberManualRecordIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="h5" >
                          Innovation
                      </Typography>
                      </ListItemText>
                    </ListItem>
                  </List>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">
                      Our compnay develops a unique dynamically and keeps in
                      step within the times
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div >
  );
}

export default About;
