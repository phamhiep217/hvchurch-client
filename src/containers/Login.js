import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginComponent from '../components/Login';
import { checkLogin, clearAuth } from '../actions';

class Login extends React.Component {
  static propTypes = {
    //error: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    //console.log('getDerivedStateFromProps', nextProps, prevState);
    if (nextProps.error && prevState.submitting) {
      return { submitting: false, error: true };
    }

    return null;
  }

  state = {
    username: '',
    password: '',
    remember: false,
    submitting: false,
    error: false
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(clearAuth());
    localStorage.clear();
    // let user = JSON.parse(localStorage.getItem('user'));
    // if (user) {
    //   this.setState({ ...user, remember: true });
    // }
  }

  handleChange = event => {
    let { name, value } = event.target;
    if (name !== 'password') {
      value = value.trim();
    }
    this.setState({ [name]: value, error: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitting: true, error: false });
    const { username, password, remember } = this.state;
    const { dispatch, history } = this.props;
    dispatch(checkLogin({ username, password }, remember, history));
  };

  render() {
    console.log('LoginContainer render');
    return (
      <LoginComponent
        containerState={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  const { error } = state.auth;
  return { error };
};

export default connect(mapStateToProps)(Login);
