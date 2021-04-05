import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logo from "./logo.png";
import { Divider, Grid } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
const drawerWidth = "100%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      height: "3rem",
      fontSize: "1rem",
      fontWeight: 300,
      padding: '0 1.5rem',
      textTransform: "capitalize",
      justifyContent: "flex-start",
      color: theme.palette.grey[600],
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: '0 1.5rem',
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    rightArc: {
      position: "absolute",
      top: "6px",
      left: "-15px",
      width: "20px",
      height: "20px",
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      transform: "rotate(270deg)",
    },
    hide: {
      display: "none",
    },
    upperMenu: {
      fontSize: '12px',
      fontWeight: 500,
      color: theme.palette.grey[600],
      textTransform: 'capitalize',
      padding: '8px',
    },
    mainMenu: {
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: '1.6rem',
      padding: '8px 16px',
      textTransform: 'capitalize',
      color: theme.palette.primary.main,
    }
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const goToProducts = () => {
    history.push('./products')
  }
  return (
    <Grid container xs={12}>
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#ffffff", boxShadow: 'none' }} >
          <Hidden smDown>
            <Grid container >
              <Grid item xs={12}>
                <div
                  style={{
                    display: 'flex',
                    height: "6px",
                    backgroundColor: "#f5f5f5",
                    position: 'absolute',
                    top: 0, left: 0, width: '100%'
                  }}
                ></div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}>
                  <div style={{
                    backgroundColor: '#f5f5f5',
                    borderBottomLeftRadius: '1rem',
                    padding: '0 5rem 0 1rem',
                    position: 'relative'
                  }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={classes.rightArc}
                    >
                      <path
                        d="M 0 20 A 20 20, 0, 0, 0, 20 0 L 20 20 Z"
                        fill="#F5F3F2"
                      ></path>
                    </svg>
                    <Button className={classes.upperMenu}>About us</Button>
                    <Button className={classes.upperMenu}>Career</Button>
                    <Button className={classes.upperMenu}>Gallery</Button>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Toolbar style={{ paddingBottom: '1.5rem' }}>
              <Grid container xs={12}>
                <Grid item xs={4}>
                  <div style={{ width: '220px', height: '60px' }}>
                    <img style={{ width: "100%", height: 'auto' }} src={logo} alt="Logo" />
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button className={classes.mainMenu} onClick={goToProducts}>Product</Button>
                    <Button className={classes.mainMenu}>Service</Button>
                    <Button className={classes.mainMenu} >Contact</Button>
                  </div>
                </Grid>
              </Grid>
            </Toolbar>
          </Hidden>


          <Hidden mdUp>
            <Toolbar>
              <div style={{ display: 'flex' }}>
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  style={{
                    color: "#009688",
                  }}
                  className={clsx(open && classes.hide)}
                >
                  <MenuIcon fontSize="inherit" />
                </IconButton>
                <div style={{ width: '15.625rem' }}></div>
                <div style={{ width: '180px', height: '50px' }}>
                  <img style={{ width: "100%", height: 'auto' }} src={logo} alt="Logo" />
                </div>
              </div>
              <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                style={{ width: "100%" }}
                open={open}
                classes={{
                  paper: classes.drawerPaper,
                }}
                color="primary"
              >
                <div className={classes.drawerHeader} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  {open === true ?
                    <IconButton edge="start"
                      onClick={handleDrawerClose}>
                      <CloseIcon fontSize="large" style={{
                        color: "#009688",
                      }} />
                    </IconButton>
                    : null}
                  <div style={{ width: '180px', height: '50px' }}>
                    <img style={{ width: "100%", height: 'auto' }} src={logo} alt="Logo" />
                  </div>
                </div>

                <Divider />
                <Button className={classes.title}>Product</Button>

                <Divider />
                <Button className={classes.title}>Service</Button>

                <Divider />
                <Button className={classes.title} >Contact</Button>

                <Divider />
                <Button style={{ backgroundColor: "#f5f5f5" }} className={classes.title}>About Us</Button>

                <Divider />
                <Button style={{ backgroundColor: "#f5f5f5" }} className={classes.title}>Career</Button>

                <Divider />
                <Button style={{ backgroundColor: "#f5f5f5" }} className={classes.title}>Gallery</Button>
                <div style={{ backgroundColor: "#f5f5f5" }}></div>

                <Divider />
              </Drawer>
            </Toolbar>
          </Hidden>
        </AppBar>
      </div >
    </Grid >
  );
}
