import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Menubar from './Menubar'
import Accordion from './Accordion'
import styled from 'styled-components'


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

const BarCont = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProgerssBar = styled.div`
  display: flex;
  justify-content: center;
  height: 8px;
  margin-top: 40px;
`;

const Step = styled.div`
  background-color: ${props => props.active ? 'green' : '#efefef'};
  position: relative;
  width: 80px;
  :: before {
    content: ' ';
    background-color: ${props => props.active ? 'green' : '#ccc'};
    height: 16px;
    width: 16px;
    border-radius: 16px;
    position: absolute;
    top: -4px;
    left: -1px;
  }
`;

const Bar = (props) => {
  return (
    <ProgerssBar>
      {props.steps.map (i => <Step active={i.active}/>)}
    </ProgerssBar>
  )
}

class App extends Component {
  render() {
    const {classes} = this.props
    const proSteps1=[
      {step: "one", active: true},
      {step: "two", active: true},
      {step: "three", active: true},
      {step: "four", active: false}
    ];
    const proSteps2=[
      {step: "one", active: true},
      {step: "two", active: true},
      {step: "three", active: true},
      {step: "four", active: true},
      {step: "five", active: false},
      {step: "six", active: false},
      {step: "seven", active: false},
    ];
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

      <BarCont>
        <Bar steps={proSteps1}/>
        <Bar steps={proSteps2}/>
      </BarCont>

      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
