import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PrivateRoute from '../components/PrivateRoute';
import Home from './Home';
import Login from './Login';

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    useNextVariants: true
  }
});

const App = props => {
  console.log('App render');
  const { token } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <PrivateRoute exact path="/" component={Home} token={token} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/home" component={Home} token={token} />
      </Router>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  token: PropTypes.string
};

const mapStateToProps = state => {
  const {
    auth: { token }
  } = state;
  return { token };
};

export default connect(mapStateToProps)(App);
