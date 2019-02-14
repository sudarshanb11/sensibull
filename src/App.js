import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Menubar from './Menubar'
import Accordion from './Accordion'


const theme = createMuiTheme({
  typography: {
    fontFamily: 'IBM Plex Sans'
  },
});
const styles = {
  mainPage: {
    paddingTop: '84px'
  },
  pageTitle: {
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '1.75',
    color: '#252b33',
  }
}
class App extends Component {
  render() {
    const {classes} = this.props
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Menubar />
        </header>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.mainPage}
        >
          <Grid item md={8}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
              <Typography className={classes.pageTitle}>
                Video Tutorials for A Badass Option Trader
              </Typography>
              <Accordion />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
