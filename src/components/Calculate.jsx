import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import initStructure from './../data-structure';

class Calculate extends Component {
  state = {
    data: initStructure().drawOffPoints,
  };
  handleDeviceCountChange = ({ target }) => {
    this.setState((prevState, props) => {
      const newData = prevState.data.map(elem => {
        if (elem.name === target.name) {
          elem.deviceCount = target.value;
          return elem;
        }
        return elem;
      });
      return { data: newData };
    });
  };

  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell numeric>cold</TableCell>
              <TableCell numeric>warm</TableCell>
              <TableCell numeric>device count</TableCell>
              <TableCell numeric>sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map(n => (
              <TableRow key={n.name}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.cold}</TableCell>
                <TableCell numeric>{n.warm}</TableCell>
                <TableCell component="th" scope="row">
                  <TextField
                    name={n.name}
                    value={n.deviceCount}
                    onChange={e => this.handleDeviceCountChange(e)}
                    type="number"
                  />
                </TableCell>
                <TableCell numeric>{n.flowSum}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

Calculate.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles()(Calculate);
