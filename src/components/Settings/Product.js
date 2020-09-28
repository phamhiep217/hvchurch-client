import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Fab } from '@material-ui/core';
import { SaveAlt, SwapVert } from '@material-ui/icons';
import GridItem from '../materialui/Grid/GridItem';
import GridContainer from '../materialui/Grid/GridContainer';
import Card from '../materialui/Card/Card';
import CardBody from '../materialui/Card/CardBody';
import AgGrid from '../materialui/Grid/AgGrid';
import Combobox from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { constants } from 'fs';

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
      paddingBottom: '50px'
    }
  }
}));
const Product = props => {
  const classes = useStyles();
  const {
    stateContainer,
    handleChange,
    handleSubmitAdd,
    handleSubmitUpdate,
    listSup,
    handleChangeSup,
    handleBlurProNo
  } = props;
  const {
    ProductLst,
    onRowDoubleClicked,
    onGridReady,
    onPaginationChanged,
    onBtFirst,
    onBtPrevious,
    onBtNext,
    onBtLast,
    onCellKeyDown
  } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <form className={classes.root} noValidate autoComplete="off">
              <div className={classes.cardTitleWhite}>Thông tin chung </div>
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <TextField
                    label="Mã NVL"
                    id="outlined-margin-dense"
                    name="proNo"
                    onBlur={handleBlurProNo}
                    value={stateContainer.proNo}
                    onChange={handleChange}
                    placeholder="Mã NVL"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <TextField
                    label="Mô tả"
                    id="outlined-margin-dense"
                    name="proName"
                    value={stateContainer.proName}
                    onChange={handleChange}
                    placeholder="Mô tả"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={2} md={2}>
                  <TextField
                    label="ĐVT"
                    id="outlined-margin-dense"
                    name="proUnit"
                    value={stateContainer.proUnit}
                    onChange={handleChange}
                    placeholder="ĐVT"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <Combobox
                    id="combo-box-no"
                    options={listSup}
                    onChange={handleChangeSup}
                    value={stateContainer.proSupply}
                    autoHighlight
                    getOptionLabel={option => option.code}
                    getOptionSelected={(option, value) =>
                      option.code === value.code
                    }
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
                    options={listSup}
                    onChange={handleChangeSup}
                    value={stateContainer.proSupply}
                    autoHighlight
                    getOptionLabel={option => option.name}
                    getOptionSelected={(option, value) =>
                      option.name === value.name
                    }
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
                <GridItem xs={12} sm={3} md={3}>
                  <TextField
                    label="Loại NVL"
                    id="outlined-margin-dense"
                    name="proStyle"
                    value={stateContainer.proStyle}
                    onChange={handleChange}
                    placeholder="loại nguyên vật liệu"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={3} md={3}>
                  <TextField
                    label="Nguồn hàng"
                    id="outlined-margin-dense"
                    name="proSource"
                    value={stateContainer.proSource}
                    onChange={handleChange}
                    placeholder="nguồn trong ngoài nuốc"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={3} md={3}>
                  <TextField
                    label="Đặc tính"
                    id="outlined-margin-dense"
                    name="proNumber"
                    value={stateContainer.proNumber}
                    onChange={handleChange}
                    placeholder="Đặc tính"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={3} md={3}>
                  <TextField
                    label="Công ty"
                    id="outlined-margin-dense"
                    name="proCompany"
                    value={stateContainer.proCompany}
                    onChange={handleChange}
                    placeholder="Công ty"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <TextField
                    label="Mã Code 1"
                    id="outlined-margin-dense"
                    name="proCode1"
                    value={stateContainer.proCode1}
                    onChange={handleChange}
                    placeholder="Mã theo nvl"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <TextField
                    label="Mã Code 2"
                    id="outlined-margin-dense"
                    name="proCode2"
                    value={stateContainer.proCode2}
                    onChange={handleChange}
                    placeholder="Mã theo công ty"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <TextField
                    label="Mã Code 3"
                    id="outlined-margin-dense"
                    name="proCode3"
                    value={stateContainer.proCode3}
                    onChange={handleChange}
                    placeholder="Mã theo nguồn"
                    className={` without-padding`}
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
                    onClick={handleSubmitAdd}
                  >
                    <SaveAlt />
                    Lưu
                  </Fab>
                  <Fab
                    style={{ marginRight: '5px' }}
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="update"
                    onClick={handleSubmitUpdate}
                  >
                    <SwapVert />
                    Chỉnh sửa
                  </Fab>
                </GridItem>
              </GridContainer>

              <span className={classes.lvwContainer}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <AgGrid
                      dataSource={ProductLst}
                      onRowDoubleClicked={onRowDoubleClicked}
                      onGridReady={onGridReady}
                      onPaginationChanged={onPaginationChanged}
                      onBtFirst={onBtFirst}
                      onBtPrevious={onBtPrevious}
                      onBtNext={onBtNext}
                      onBtLast={onBtLast}
                      onCellKeyDown={onCellKeyDown}
                    />
                  </GridItem>
                </GridContainer>
              </span>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default Product;
