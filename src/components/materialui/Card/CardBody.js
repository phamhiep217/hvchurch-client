import React from 'react';
// nodejs library that concatenates classes
import clsx from 'clsx';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons

// core components
import cardBodyStyle from '../../../asset/jss/material-dashboard-react/components/cardBodyStyle';

function CardBody({ ...props }) {
  const { classes, className, children, plain, profile, ...rest } = props;
  const cardBodyClasses = clsx({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool
};

export default withStyles(cardBodyStyle)(CardBody);
