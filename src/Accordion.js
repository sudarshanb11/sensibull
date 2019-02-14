import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionHeader from './AccordionHeader'
import VideoLink from './VideoLink'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  panel: {
    boxShadow: 'none',
  },
  panelSummary: {
    borderBottom: 'none',
    padding: '0px'
  },
  panelDetails: {
    padding: '0px'
  }
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary className={classes.panelSummary}>
          <AccordionHeader />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.panelDetails}>
          <VideoLink />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary className={classes.panelSummary}>
          <AccordionHeader />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails  className={classes.panelDetails}>
          <VideoLink />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary className={classes.panelSummary}>
          <AccordionHeader />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails  className={classes.panelDetails}>
          <VideoLink />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
