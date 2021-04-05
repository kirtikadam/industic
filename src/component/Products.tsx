import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      padding: '0',
    },
    breadcrumbAlign: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '1.5rem',
    },
    linkStyle: {
      fontSize: '12px',
      color: theme.palette.primary.main,
    },
    buttonAlign: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: '1.5rem',
    },
    buttonStyle: {
      borderTopLeftRadius: '1rem',
      borderTopRightRadius: '0',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '1rem',
      marginLeft: '1rem',
      fontSize: '13px',
    },
    pageHead: {
      '& a': {
        marginRight: theme.spacing(3),
        fontWeight: 500,
        color: theme.palette.grey[600]
      },
      backgroundColor: theme.palette.secondary.main,
      padding: '1rem 1.5rem',
      marginBottom: '3rem',
    },
    sectionHead: {
      backgroundColor: theme.palette.primary.main,
      opacity: 0.5,
      fontSize: '1.5rem',
      fontWeight: 300,
      padding: '1rem 1.5rem',
      marginBottom: '3rem',
      color: theme.palette.primary.contrastText,
    },
    imgResponsive: {
      height: 'auto',
      width: '100%',
    },
    subHead: {
      color: theme.palette.primary.main,
      fontWeight: 300,
      fontSize: '3rem',
      margin: 0
    },
    listStyle: {
      fontSize: '1rem',
      '& li': {
        marginBottom: '0.5rem',
      }
    },
    table: {
      minWidth: 650,
      '& tr:hover': {
        backgroundColor: theme.palette.secondary.main
      },
      '& th': {
        backgroundColor: theme.palette.secondary.main
      }
    },
    tableWrapper: {
      padding: '0 1.5rem 1rem',
    },
    jobSampleImgWrap: {
      '& img': {
        height: '200px',
        width: '200px',
        margin: '2rem',
        border: '2px solid #c2c2c2',
      }
    }
  }),
);

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function createData(parameter: string, unit: string, nxg1: string, nxg2: string, nxg3: string, nxg4: string,) {
  return { parameter, unit, nxg1, nxg2, nxg3, nxg4 };
}

const rows = [
  createData('Work Table Size', 'mm', '280 x 380', '400 x 640', '610 x 850', '1130 x 1460'),
  createData('XY Traverse', 'mm', '200 x 210', '320 x 400', '500 x 630', '1000 x 1200'),
  createData('Max.Z Height', 'mm', '200', '400', '600', '1000'),
  createData('Max Taper Angle', 'degree', '+- 3deg/100 mm', '+- 3deg/100 mm', '+- 3deg/100 mm', '+- 3deg/100 mm'),
  createData('Max Workpiece Weight', 'kg', '200', '400', '900', '2500'),
  createData('Floor Plan', 'mm', '2300 x 2300 x 1740', '2700 x 2700 x 1860', '2800 x2700 x 2200', '1450 x 4000 x 3000'),
];

function Products() {
  const classes = useStyles();

  return (
    <div>
      <div style={{ marginTop: '1rem' }}></div>
      <Container className={classes.root} maxWidth={false}>
        <Grid container>
          <Grid item md={7} className={classes.breadcrumbAlign}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link color="inherit" href="/" onClick={handleClick} className={classes.linkStyle}>
                Home
              </Link>
              <Typography color="textPrimary" className={classes.linkStyle}>NXG Series (Wirecut - Resuable Type)</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item md={5} className={classes.buttonAlign}>
            <Button variant="contained" className={classes.buttonStyle} color="primary" disableElevation>
              Request a quote
          </Button>
            <Button variant="contained" className={classes.buttonStyle} color="secondary" disableElevation>
              Download Brochure
          </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.pageHead}>
          <Grid item md={12}>
            <Link href="#specification">
              Specifications
            </Link>
            <Link href="#jobSample">
              Job Sample
            </Link>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={5}>
            <img className={classes.imgResponsive} src="/images/product-nxgSeries.png" alt="Product NXG Series" />
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={5}>
            <h1 className={classes.subHead}>NXG Series</h1>
            <p className={classes.listStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p className={classes.listStyle}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul className={classes.listStyle}>
              <li><span>Full Closed loop X, Y (linear scale) with error compensation.</span></li>
              <li><span>Online offset correction feature.</span></li>
              <li><span>Mutipass and Multicavity,complex cutting, and taper cutting facility.</span></li>
              <li><span>Low Power consumption.</span></li>
              <li><span>MDI function.</span></li>
              <li><span>Mid program.</span></li>
              <li><span>Pre-jog function.</span></li>
              <li><span>Pre-spark function.</span></li>
              <li><span>Inbuilt 4 axis DRO.</span></li>
              <li><span>Available in four sizes.</span></li>
            </ul>
          </Grid>
        </Grid>
        <Grid container className={classes.sectionHead}>
          <Grid item md={12}>
            <span>Specifications</span>
          </Grid>
        </Grid>
        <div className={classes.tableWrapper}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Parameter</TableCell>
                  <TableCell>Unit</TableCell>
                  <TableCell>2025 NXG</TableCell>
                  <TableCell>3240 NXG</TableCell>
                  <TableCell>5063 NXG</TableCell>
                  <TableCell>100120 NXG</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.parameter}>
                    <TableCell scope="row">
                      {row.parameter}
                    </TableCell>
                    <TableCell>{row.unit}</TableCell>
                    <TableCell>{row.nxg1}</TableCell>
                    <TableCell>{row.nxg2}</TableCell>
                    <TableCell>{row.nxg3}</TableCell>
                    <TableCell>{row.nxg4}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Grid container className={classes.sectionHead}>
          <Grid item md={12}>
            <span>Job Sample</span>
          </Grid>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={classes.jobSampleImgWrap}><img src="/images/nxg1.jpg" alt="job samples" /></div>
          <div className={classes.jobSampleImgWrap}><img src="/images/nxg2.jpg" alt="job samples" /></div>
          <div className={classes.jobSampleImgWrap}><img src="/images/nxg3.jpg" alt="job samples" /></div>
          <div className={classes.jobSampleImgWrap}><img src="/images/nxg4.jpg" alt="job samples" /></div>
        </div>
      </Container>
    </div>
  );
}

export default Products;
