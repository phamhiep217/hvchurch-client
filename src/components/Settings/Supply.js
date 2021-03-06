import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Fab } from '@material-ui/core';
import { SaveAlt, SwapVert } from '@material-ui/icons';
import GridItem from '../materialui/Grid/GridItem';
import GridContainer from '../materialui/Grid/GridContainer';
import Card from '../materialui/Card/Card';
import CardBody from '../materialui/Card/CardBody';
import AgGrid from '../materialui/Grid/AgGrid';
import PropTypes from 'prop-types';

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

const Supply = props => {
  const classes = useStyles();
  const {
    stateContainer,
    handleChange,
    handleSubmitAdd,
    handleSubmitUpdate
  } = props;
  const {
    SupplyLst,
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
                <GridItem xs={12} sm={6} md={6}>
                  <TextField
                    label="Mã nhà cung cấp"
                    id="outlined-margin-dense"
                    name="supNo"
                    value={stateContainer.supNo}
                    onChange={handleChange}
                    placeholder="Mã nhà cung cấp"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <TextField
                    label="Tên nhà cung cấp"
                    id="outlined-margin-dense"
                    name="supName"
                    value={stateContainer.supName}
                    onChange={handleChange}
                    placeholder="Tên nhà cung cấp"
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
                      dataSource={SupplyLst}
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

export default Supply;
