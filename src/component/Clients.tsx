import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      // backgroundColor: 'rgb(3,3,3)',
      background: 'repeating-linear-gradient(to right, #cfcfcf, #cfcfcf 2px, #c2c2c2 2px, #c2c2c2 4px)',
      opacity: '0.3',
    },
    header: {
      fontSize: theme.typography.h4.fontSize,
      display: 'flex',
      justifyContent: 'center',
      margin: '1rem 0',
    },
    imgResponsive: {
      height: 'auto',
      width: '100%',
    }
  }),
);

class Clients extends React.Component {
  items = [
    {
      Name: "Government Sector",
      Image: "/images/govt-clients.png"
    },
    {
      Name: "Corporate Sector",
      Image: "/images/corporate-clients.png"
    },
    {
      Name: "Institute Sector",
      Image: "/images/institute-clients.png"
    }
  ]
  render() {
    return (
      <Carousel
        autoPlay={true} animation={'slide'} indicators={false} timeout={150} navButtonsAlwaysInvisible={true} stopAutoPlayOnHover={false}>
        {
          this.items.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
    );
  }
}

function Item(props: { item: { Name: string; Image: string; }; }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h4 className={classes.header}>{props.item.Name}</h4>
      <div>
        <img className={classes.imgResponsive} src={props.item.Image} alt="clients" />
        <div className={classes.overlay}></div>
      </div>
    </div>
  )
}

export default Clients;
