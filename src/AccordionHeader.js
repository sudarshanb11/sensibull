import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardBg from './images/group-6.svg';
import CardImg from './images/group-7.svg';
import Icon from '@material-ui/core/Icon';

const styles = {
  card: {
    width: 321,
    minHeight: 183,
    backgroundImage: `url(${CardBg})`,
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardImg: {
    position: 'absolute',
    right: '42px',
    bottom: '23px',
  },
  subtitle1: {
    fontSize: '18px',
    color: 'rgba(0, 0, 0, 0.51)'
  },
  cardBtn: {
    background: '#4184f3',
    color: '#fff',
    borderRadius: 0,
    textTransform: 'capitalize',
    fontSize: '14px',
    padding: '4px 14px'
  },
  blankBtn: {
    textTransform: 'capitalize',
    fontSize: '14px',
    color: '#252b33'
  },
  btnIcon: {
    fontSize: '14px',
    paddingRight: '20px'
  },
  blankBtnIcon: {
    fontSize: '14px',
    paddingRight: '5px'
  }
};

const AccordionHeader = (props) => {
  const { classes } = props;
  return (
    <Grid container spacing={16}>
      <Grid item md={5}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Trade options like a pro
              </Typography>
              <img src={CardImg} width='78' height='91' alt="sensibull" className={classes.cardImg}/>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" className={classes.cardBtn}>
                <Icon className={classes.btnIcon}>play_circle_outline</Icon>  Play all
              </Button>
            </CardActions>
          </Card>

      </Grid>
      <Grid item md={7}>
        <Typography variant="body2" gutterBottom className={classes.subtitle1}>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Button size="small" className={classes.blankBtn}>
        <Icon className={classes.blankBtnIcon}>playlist_play</Icon> 11 Videos
      </Button>
      <Button size="small" className={classes.blankBtn}>
        <Icon className={classes.blankBtnIcon}>play_circle_outline</Icon> Play All
      </Button>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(AccordionHeader);