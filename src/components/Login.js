import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Typography,
  Paper,
  Avatar,
  FormControl,
  InputLabel,
  Input,
  LinearProgress
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  progress: {
    width: '100%'
  },
  error: {
    marginTop: theme.spacing.unit
  }
});

const renderError = props => {
  const { classes, containerState } = props;
  if (containerState.error) {
    return (
      <Typography variant="subtitle1" color="error" className={classes.error}>
        Tên đăng nhập hoặc mật khẩu không đúng
      </Typography>
    );
  }
};

const renderButton = props => {
  const { classes, containerState } = props;
  const { submitting } = containerState;

  if (submitting) {
    return (
      <div className={classes.submit}>
        <LinearProgress className={classes.progress} />
      </div>
    );
  }

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Đăng nhập
    </Button>
  );
};

const Login = props => {
  console.log('Login render');
  const { classes, containerState, handleSubmit, handleChange } = props;
  const { username, password } = containerState;

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Đăng nhập</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Tên đăng nhập</InputLabel>
            <Input
              id="username"
              name="username"
              autoFocus
              value={username}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Mật khẩu</InputLabel>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </FormControl>
          {/* <FormControlLabel
            control={
              <Checkbox
                color="primary"
                value="remember"
                checked={remember}
                onChange={handleCheck('remember')}
              />
            }
            label="Ghi nhớ tên đăng nhập và mật khẩu"
          /> */}
          {renderButton(props)}
          {renderError(props)}
        </form>
      </Paper>
    </main>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  containerState: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(Login);
