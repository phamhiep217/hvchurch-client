import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Fab, Divider, Typography } from '@material-ui/core';
import { Autorenew, SaveAlt } from '@material-ui/icons';
import Done from '@material-ui/icons/Done';
import GridItem from '../materialui/Grid/GridItem';
import GridContainer from '../materialui/Grid/GridContainer';
import Card from '../materialui/Card/Card';
import CardBody from '../materialui/Card/CardBody';
import Combobox, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import AgGrid from '../materialui/Grid/AgGrid';
import PropTypes from 'prop-types';
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
  }
}));

const PurIn = props => {
  const {
    handleChangeSup,
    handleChangeStaPay,
    handleChangeStaShip,
    handleChangePro,
    handleChangePayment,
    listSupply,
    listProduct,
    listPayment,
    onKeyDown,
    containState,
    statusShipmentLst,
    statusPaymentLst
  } = props;
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const filterOptions = createFilterOptions({
    limit: 5
  });
  const handleDateChange = date => {
    setSelectedDate(date);
    // if (date != 'Invalid Date' && date instanceof Date) {
    //   console.log(date);
    // }
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <form className={classes.root} noValidate autoComplete="off">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Typography variant="h6" gutterBottom color="primary">
                  Thông tin đơn đặt hàng
                </Typography>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <Combobox
                      id="combo-box-no"
                      options={listSupply}
                      onChange={handleChangeSup}
                      value={containState.supName}
                      autoHighlight
                      getOptionLabel={option => option.code}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Mã nhà cung cấp"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      )}
                      renderOption={option => (
                        <React.Fragment>
                          {option.code} | {option.name}
                        </React.Fragment>
                      )}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Combobox
                      id="combo-box-no"
                      options={listSupply}
                      onChange={handleChangeSup}
                      value={containState.supName}
                      autoHighlight
                      getOptionLabel={option => option.name}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Nhà cung cấp"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      )}
                      renderOption={option => (
                        <React.Fragment>
                          {option.code} | {option.name}
                        </React.Fragment>
                      )}
                    />
                  </GridItem>
                </GridContainer>
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
                      label="Ngày PO"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date'
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <TextField
                      label="Số PO / Hợp đồng"
                      id="outlined-margin-dense"
                      placeholder="Số PO / Hợp đồng"
                      className={` without-padding`}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <Divider />
                <Typography variant="h6" gutterBottom color="primary">
                  Thông tin nguyên vật liệu
                </Typography>
                <GridContainer>
                  <GridItem xs={12} sm={3} md={3}>
                    <Combobox
                      id="combo-box-no"
                      options={listProduct}
                      onChange={handleChangePro}
                      value={containState.proNo}
                      filterOptions={filterOptions}
                      autoHighlight
                      getOptionLabel={option => option.code}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Mã NVL"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      )}
                      renderOption={option => (
                        <React.Fragment>{option.code}</React.Fragment>
                      )}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Combobox
                      id="combo-box-no"
                      options={listProduct}
                      onChange={handleChangePro}
                      value={containState.proNo}
                      filterOptions={filterOptions}
                      autoHighlight
                      getOptionLabel={option => option.name}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="NVL"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      )}
                      renderOption={option => (
                        <React.Fragment>{option.name}</React.Fragment>
                      )}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={1} md={1}>
                    <TextField
                      label="Số lượng"
                      id="outlined-margin-dense"
                      className={` without-padding`}
                      variant="outlined"
                      type="number"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={2} md={2}>
                    <TextField
                      label="Đơn giá"
                      id="outlined-margin-dense"
                      className={` without-padding`}
                      variant="outlined"
                      type="number"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <TextField
                      label="Thành tiền"
                      id="outlined-margin-dense"
                      className={` without-padding`}
                      variant="outlined"
                      type="number"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={3} md={3}>
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
                      label="Ngày ETA ( dự kiến )"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date'
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
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
                      label="Ngày giao hàng"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date'
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Combobox
                      id="combo-box-no"
                      options={listPayment}
                      onChange={handleChangePayment}
                      value={containState.payName}
                      autoHighlight
                      getOptionLabel={option => option.code}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Payment Term"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      )}
                      renderOption={option => (
                        <React.Fragment>
                          {option.code} | {option.name}
                        </React.Fragment>
                      )}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
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
                      label="Hạn thanh toán"
                      value={selectedDate}
                      onChange={handleDateChange}
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
                      options={statusShipmentLst}
                      onChange={handleChangeStaShip}
                      value={containState.statusShipment}
                      autoHighlight
                      getOptionLabel={option => option.code}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Status"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      )}
                      renderOption={option => (
                        <React.Fragment>
                          {option.code} | {option.name}
                        </React.Fragment>
                      )}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <Combobox
                      id="combo-box-no"
                      options={statusPaymentLst}
                      onChange={handleChangeStaPay}
                      value={containState.statusPayment}
                      autoHighlight
                      getOptionLabel={option => option.code}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Payment Status"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      )}
                      renderOption={option => (
                        <React.Fragment>
                          {option.code} | {option.name}
                        </React.Fragment>
                      )}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      id="outlined-multiline-static"
                      name="note"
                      label="Ghi chú"
                      multiline
                      rows="2"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true
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
                      aria-label="Add"
                    >
                      <SaveAlt />
                      Lưu
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

export default PurIn;
