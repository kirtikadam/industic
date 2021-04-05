import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.secondary.main,
      padding: "1.5rem 0 0",
    },
    headerText: {
      fontWeight: theme.typography.fontWeightLight,
    },
    list: {
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.primary.main,
      listStyleType: "none",
      paddingLeft: "0",
    },
    listLight: {
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.primary.contrastText,
      listStyleType: "none",
      display: "flex",
      alignItems: "center",
      paddingLeft: "1rem",
    },
    listItem: {
      margin: "0 0 1rem 0",
    },
    listItemLight: {
      color: theme.palette.primary.contrastText,
      paddingLeft: "1rem",
      display: "flex",
    },
    headerSpacing: {
      paddingTop: "1rem",
    },
    parentSpacing: {
      padding: "0 30px",
    },
    addressSection: {
      backgroundColor: theme.palette.primary.main,
      padding: "1rem 2rem",
      color: theme.palette.primary.contrastText,
      borderTopLeftRadius: "25px",
      borderTopRightRadius: "25px",
      position: "relative",
    },
    lowerFooter: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: "0 30px",
      display: "flex",
      alignItems: "center",
    },
    leftArc: {
      width: "1.25rem",
      height: "1.25rem",
      position: "absolute",
      left: "-1.25rem",
      bottom: "0px",
      transform: "rotate(0deg)",
    },
    rightArc: {
      position: "absolute",
      width: "20px",
      height: "20px",
      backgroundSize: "cover",
      transform: "rotate(90deg)",
      bottom: "0",
      right: "-20px",
    },
  })
);

function Footer() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.root} maxWidth={false}>
        <Grid container className={classes.parentSpacing}>
          <Grid item sm={7}>
            <div className={classes.headerSpacing}>
              <h3 className={classes.headerText}>Quick Links</h3>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <Link href="#about-us">About us</Link>
                </li>
                <li className={classes.listItem}>
                  <Link href="#gallery">Gallery</Link>
                </li>
                <li className={classes.listItem}>
                  <Link href="#career">Career</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item sm={4}>
            <div className={classes.addressSection}>
              <h3 className={classes.headerText}>
                Industic Pvt Limited
              </h3>
              <p>ABC, East Street, Park Avenue, XYZA-01.</p>
              <p>qwe@industic.com</p>
              <p>000-1234567, 9876543</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.leftArc}
              >
                <path
                  d="M 0 20 A 20 20, 0, 0, 0, 20 0 L 20 20 Z"
                  fill="#ff7607"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.rightArc}
              >
                <path
                  d="M 0 20 A 20 20, 0, 0, 0, 20 0 L 20 20 Z"
                  fill="#ff7607"
                ></path>
              </svg>
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.lowerFooter}>
          <Grid item sm={4}>
            <p>© 1989-2021, INDUSTIC</p>
          </Grid>
          <Grid item sm={3}>
            <ul className={classes.listLight}>
              <li>
                <span>Follow</span>
              </li>
              <li>
                <Link href="#facebook" className={classes.listItemLight}>
                  <FacebookIcon />
                </Link>
              </li>
              <li>
                <Link href="#twitter" className={classes.listItemLight}>
                  <TwitterIcon />
                </Link>
              </li>
              <li>
                <Link href="#linkedin" className={classes.listItemLight}>
                  <LinkedInIcon />
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item sm={5}>
            <ul className={classes.listLight}>
              <li>
                <Link href="#privacy-policy" className={classes.listItemLight}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#cookies-policy" className={classes.listItemLight}>
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#legal-terms-and-conditions"
                  className={classes.listItemLight}
                >
                  Legal Terms and Conditions
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
