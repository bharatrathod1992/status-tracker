import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import TaskCard from './TaskCard';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class Blocker extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12}>
          <Paper className={styles.root} elevation={1}>
            <Typography variant="h5" component="h3" align="center">
              Blockers
            </Typography>
            <TaskCard />
          </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Blocker;
