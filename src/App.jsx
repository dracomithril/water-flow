import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import BaseContainer from './components/BaseContainer';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <BaseContainer />
  </MuiThemeProvider>
);

export default App;
