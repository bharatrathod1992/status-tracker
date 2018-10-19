import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import TitleBar from './components/TitleBar';
import Blocker from './components/Blocker';
import Today from './components/Today';
import Yesterday from './components/Yesterday';
import Footer from './components/Footer';

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="root">
      <Grid container spacing={16}>
        <Grid item xs={12}>
            <TitleBar />
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={16}>
        <Grid item xs={4}>
            <Blocker />
        </Grid>
        <Grid item xs={4}>
            <Today />
        </Grid>
        <Grid item xs={4}>
            <Yesterday />
        </Grid>
      </Grid>
      
      </div>
    );
  }
}

export default App;
