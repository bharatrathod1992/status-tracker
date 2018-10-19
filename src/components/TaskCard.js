import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';


const styles = {
  card: {
    width: 500,

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
  }
};

class TaskCard extends Component {

  render() {
    const { classes } = this.props;

    const bull = <span className={styles.bullet}>•</span>;
    return (
      <div>
        <Card className={styles.card}>
          <CardContent>
            <TextField
              id="outlined-name"
              label={"Blocker"}
              fullWidth={true}bh
              value={"this.state.name"}
              // onChange={"this.handleChange('name')"}
              margin="normal"
              variant="outlined"
            />

          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default TaskCard;
