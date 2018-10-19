import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class TitleBar extends Component<Props> {
  render() {
    // const { classes } = rops;
    return (
      <div>
          <AppBar color="primary" position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={styles.grow}>
                Status Tracker
              </Typography>

            </Toolbar>
          </AppBar>
      </div>
    );
  }
}

export default TitleBar;
