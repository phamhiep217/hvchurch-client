import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  cardTitleWhite: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif"
  },
  itemContent: {
    marginTop: '10px !important',
    paddingTop: '10px !important'
  }
});

const UserInfor = props => {
  return <div>Thong tin nhan vien</div>;
};

UserInfor.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserInfor);
