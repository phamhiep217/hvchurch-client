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

const PurInSearch = props => {
  const classes = useStyles();
  const { handleSubmitAdd, handleSubmitPart } = props;
  const {
    PurchaseLst,
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
                    Thêm
                  </Fab>
                  <Fab
                    style={{ marginRight: '5px' }}
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="update"
                    onClick={handleSubmitPart}
                  >
                    <SwapVert />
                    Partial shipment
                  </Fab>
                </GridItem>
              </GridContainer>

              <span className={classes.lvwContainer}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <AgGrid
                      dataSource={PurchaseLst}
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

export default PurInSearch;
