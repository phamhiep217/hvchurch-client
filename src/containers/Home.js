import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeComponent from '../components/Home';
import { getUserById } from '../actions';

class Home extends React.Component {
  state = {
    open: true,
    openCollapse: false,
    namePage: 'Trang chủ'
  };

  handleOpenCallapse = () => {
    this.setState(state => ({ openCollapse: !state.openCollapse }));
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleNamePage = name => event => {
    event.preventDefault();
    this.setState({ namePage: name });
  };

  componentDidMount() {
    const { dispatch, token, empUserId } = this.props;
    dispatch(getUserById(empUserId, token));
  }

  render() {
    console.log('Home render');
    const { empUserName, empRole } = this.props;
    const namelogin = empUserName ? empUserName : '';
    const role = empRole ? empRole : [1];
    return (
      <main>
        <HomeComponent
          open={this.state.open}
          namelogin={namelogin}
          role={role}
          openCollapse={this.state.openCollapse}
          handleOpenCallapse={this.handleOpenCallapse}
          handleDrawerOpen={this.handleDrawerOpen}
          handleDrawerClose={this.handleDrawerClose}
          handleNamePage={this.handleNamePage}
          namePage={this.state.namePage}
          history={this.props.history}
        />
      </main>
    );
  }
}

const mapStateToProps = state => {
  const {
    auth: { token, empUserId },
    user: { empUserName, empRole }
  } = state;
  return { token, empUserId, empRole, empUserName };
};

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  empUserId: PropTypes.string.isRequired,
  empUserName: PropTypes.string.isRequired,
  empRole: PropTypes.array.isRequired
};
export default connect(mapStateToProps)(Home);
