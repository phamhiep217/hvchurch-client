import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Fab, CircularProgress, Backdrop } from '@material-ui/core';
import { SaveAlt, SwapVert } from '@material-ui/icons';
import GridItem from '../materialui/Grid/GridItem';
import GridContainer from '../materialui/Grid/GridContainer';
import Card from '../materialui/Card/Card';
import CardBody from '../materialui/Card/CardBody';
import AgGrid from '../materialui/Grid/AgGrid';
import PropTypes from 'prop-types';
import Combobox from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiGrid-container': {
      margin: '0px'
    },
    '& .MuiTextField-root': {
      width: '100%',
      margin: theme.spacing(1),
      '& .MuiInputBase-input': {
        padding: '1px'
      }
    },
    '& .MuiGrid-item': {
      padding: '0 3px'
    }
  },
  cardTitleWhite: {
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '15px',
    textDecoration: 'none',
    fontSize: '28px',
    lineHeight: '1',
    textAlign: 'center'
  },
  lvwContainer: {
    '& .MuiGrid-item': {
      paddingBottom: '50px',
      marginTop: '10px'
    }
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}));

const RptInventoryNVL = props => {
  console.log('render component rptInventoryNVL.js');
  const classes = useStyles();
  const {
    loading,
    stateContainer,
    handleFromDateChange,
    handleToDateChange,
    handleRptNVL100,
    handleRptNVL200,
    handleRptTP100,
    handleRptTP200
  } = props;

  return (
    <GridContainer>
      <Backdrop className={classes.backdrop} open={!loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <form className={classes.root} noValidate autoComplete="off">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className={classes.cardTitleWhite}>Thông tin chung </div>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <KeyboardDatePicker
                      disableToolbar
                      inputVariant="outlined"
                      InputLabelProps={{
                        shrink: true
                      }}
                      className={` without-padding`}
                      format="dd/MM/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Từ ngày"
                      value={stateContainer.invFromDate}
                      onChange={handleFromDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date'
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <KeyboardDatePicker
                      disableToolbar
                      inputVariant="outlined"
                      InputLabelProps={{
                        shrink: true
                      }}
                      className={` without-padding`}
                      format="dd/MM/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Đến ngày"
                      value={stateContainer.invToDate}
                      onChange={handleToDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date'
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Fab
                      style={{ marginRight: '5px' }}
                      variant="extended"
                      size="medium"
                      color="primary"
                      aria-label="get"
                      onClick={handleRptNVL100}
                    >
                      <SwapVert />
                      Báo cáo XNTDK 152
                    </Fab>
                    <Fab
                      style={{ marginRight: '5px' }}
                      variant="extended"
                      size="medium"
                      color="primary"
                      aria-label="get"
                      onClick={handleRptNVL200}
                    >
                      <SwapVert />
                      Báo cáo XNTKV 152
                    </Fab>
                    <Fab
                      style={{ marginRight: '5px' }}
                      variant="extended"
                      size="medium"
                      color="primary"
                      aria-label="get"
                      onClick={handleRptTP100}
                    >
                      <SwapVert />
                      Báo cáo XNTDK 155
                    </Fab>
                    <Fab
                      style={{ marginRight: '5px' }}
                      variant="extended"
                      size="medium"
                      color="primary"
                      aria-label="get"
                      onClick={handleRptTP200}
                    >
                      <SwapVert />
                      Báo cáo XNTKV 155
                    </Fab>
                  </GridItem>
                </GridContainer>
              </MuiPickersUtilsProvider>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default RptInventoryNVL;
