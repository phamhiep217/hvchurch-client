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

const RptInventory = props => {
  console.log('render component rptInventory.js');
  const classes = useStyles();
  const {
    loading,
    stateContainer,
    handleFromDateChange,
    handleToDateChange,
    handleSubmitShow,
    handleGetInvDK,
    handleGetInvKV,
    handleRptInv,
    handleRptInvByWareHouse,
    listWH,
    handleChangeFromWH,
    handleChangeToWH
  } = props;
  const {
    RptInventoryDKLst,
    onRowDoubleClicked,
    onGridReady,
    onPaginationChanged,
    onBtFirst,
    onBtPrevious,
    onBtNext,
    onBtLast,
    onCellKeyDown
  } = props;
  const {
    RptInventoryKVLst,
    onRowDoubleClickedKV,
    onGridReadyKV,
    onPaginationChangedKV,
    onBtFirstKV,
    onBtPreviousKV,
    onBtNextKV,
    onBtLastKV,
    onCellKeyDownKV
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
                  <GridItem xs={12} sm={6} md={6}>
                    <Combobox
                      id="combo-box-no"
                      options={listWH}
                      onChange={handleChangeFromWH}
                      value={stateContainer.fromWH}
                      autoHighlight
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Kho hàng"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      )}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <Combobox
                      id="combo-box-no"
                      options={listWH}
                      onChange={handleChangeToWH}
                      value={stateContainer.toWH}
                      autoHighlight
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Đến"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      )}
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
                      aria-label="Add"
                      onClick={handleSubmitShow}
                    >
                      <SaveAlt />
                      Xem
                    </Fab>
                    <Fab
                      style={{ marginRight: '5px' }}
                      variant="extended"
                      size="medium"
                      color="primary"
                      aria-label="get"
                      onClick={handleGetInvDK}
                    >
                      <SwapVert />
                      Lấy tồn kho DK
                    </Fab>
                    <Fab
                      style={{ marginRight: '5px' }}
                      variant="extended"
                      size="medium"
                      color="primary"
                      aria-label="get"
                      onClick={handleGetInvKV}
                    >
                      <SwapVert />
                      Lấy tồn kho KV
                    </Fab>
                    <Fab
                      style={{ marginRight: '5px' }}
                      variant="extended"
                      size="medium"
                      color="primary"
                      aria-label="get"
                      onClick={handleRptInv}
                    >
                      <SwapVert />
                      Báo cáo tồn kho
                    </Fab>
                    <Fab
                      style={{ marginRight: '5px' }}
                      variant="extended"
                      size="medium"
                      color="primary"
                      aria-label="get"
                      onClick={handleRptInvByWareHouse}
                    >
                      <SwapVert />
                      Báo cáo tồn theo kho
                    </Fab>
                  </GridItem>
                </GridContainer>

                <span className={classes.lvwContainer}>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                      <span className={`griddk`}>
                        <div className={classes.cardTitleWhite}>
                          Tồn kho Dy Khang{' '}
                        </div>
                        <AgGrid
                          dataSource={RptInventoryDKLst}
                          onRowDoubleClicked={onRowDoubleClicked}
                          onGridReady={onGridReady}
                          onPaginationChanged={onPaginationChanged}
                          onBtFirst={onBtFirst}
                          onBtPrevious={onBtPrevious}
                          onBtNext={onBtNext}
                          onBtLast={onBtLast}
                          onCellKeyDown={onCellKeyDown}
                        />
                      </span>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                      <span className={`gridkv`}>
                        <div className={classes.cardTitleWhite}>
                          Tồn kho Khang Việt{' '}
                        </div>
                        <AgGrid
                          dataSource={RptInventoryKVLst}
                          onRowDoubleClicked={onRowDoubleClickedKV}
                          onGridReady={onGridReadyKV}
                          onPaginationChanged={onPaginationChangedKV}
                          onBtFirst={onBtFirstKV}
                          onBtPrevious={onBtPreviousKV}
                          onBtNext={onBtNextKV}
                          onBtLast={onBtLastKV}
                          onCellKeyDown={onCellKeyDownKV}
                        />
                      </span>
                    </GridItem>
                  </GridContainer>
                </span>
              </MuiPickersUtilsProvider>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default RptInventory;
