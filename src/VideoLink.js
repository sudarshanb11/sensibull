import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = {
  root: {
    width: '100%'
  },
  listItem: {
    width: '100%',
    background: '#f9f9f9',
    marginBottom: '5px',
    fontSize: '14px'
  },
  ListBtn: {

  }
}
const VideoLink = (props) => {
  const { classes } = props;
  return (
    <List className={classes.root}>
        <ListItem className={classes.listItem}>
          <ListItemText
            primary="Single-line item"
            className={classes.listItem}
          />
          <ListItemSecondaryAction>
            <Button size="small" className={classes.cardBtn}>
                <Icon className={classes.btnIcon}>play_circle_outline</Icon>  Play all
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            primary="Single-line item"
          />
          <ListItemSecondaryAction>
            <Button size="small" className={classes.ListBtn}>
                <Icon className={classes.btnIcon}>play_circle_outline</Icon>  Play all
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
    </List>
  )
}

export default withStyles(styles)(VideoLink)