import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Fab,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
  Icon,
  ListItemSecondaryAction,
  Checkbox
} from '@material-ui/core';
import { SaveAlt, SwapVert } from '@material-ui/icons';
import GridItem from '../materialui/Grid/GridItem';
import GridContainer from '../materialui/Grid/GridContainer';
import Card from '../materialui/Card/Card';
import CardBody from '../materialui/Card/CardBody';
import AgGrid from '../materialui/Grid/AgGrid';
import PropTypes from 'prop-types';

import routes from '../../routes';

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
const rederListItem = (props, obj, key) => {
  const { handleToggle, stateContainer } = props;
  const { checked } = stateContainer;
  if (obj.collapse) {
    const labelParentId = `checkbox-list-secondary-label-${obj.id}`;
    return (
      <div key={obj.name}>
        <ListItem button key={key}>
          <ListItemIcon>
            <Icon color="primary">{obj.icon}</Icon>
          </ListItemIcon>
          <ListItemText id={labelParentId} primary={obj.name} />
          <ListItemSecondaryAction>
            <Checkbox
              edge="end"
              onChange={handleToggle(obj.id)}
              checked={checked.indexOf(obj.id) !== -1}
              inputProps={{ 'aria-labelledby': labelParentId }}
            />
          </ListItemSecondaryAction>
        </ListItem>
        {obj.childs.map((objChild, index) => {
          const labelId = `checkbox-list-secondary-label-${objChild.id}`;
          return (
            <ListItem button key={index}>
              <ListItemIcon>
                <Icon color="primary">{objChild.icon}</Icon>
              </ListItemIcon>
              <ListItemText id={labelId} primary={objChild.name} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(objChild.id)}
                  checked={checked.indexOf(objChild.id) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </div>
    );
  }
  const labelId = `checkbox-list-secondary-label-${obj.id}`;
  return (
    <div key={obj.name}>
      <ListItem button key={key}>
        <ListItemIcon>
          <Icon color="primary">{obj.icon}</Icon>
        </ListItemIcon>
        <ListItemText id={labelId} primary={obj.name} />
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={handleToggle(obj.id)}
            checked={checked.indexOf(obj.id) !== -1}
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
};
const Emp = props => {
  const classes = useStyles();
  const {
    stateContainer,
    handleChange,
    handleSubmitAdd,
    handleSubmitUpdate,
    handleChangePass
  } = props;
  const {
    userLst,
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
              <div className={classes.cardTitleWhite}> Nhân Viên </div>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <TextField
                    label="Mã nhân viên"
                    id="outlined-margin-dense"
                    name="empCode"
                    value={stateContainer.empCode}
                    onChange={handleChange}
                    placeholder="Mã nhân viên"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <TextField
                    label="Tên nhân viên"
                    id="outlined-margin-dense"
                    name="empName"
                    value={stateContainer.empName}
                    onChange={handleChange}
                    placeholder="Tên nhân viên"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <TextField
                    label="Số điện thoại"
                    id="outlined-margin-dense"
                    name="empPhone"
                    value={stateContainer.empPhone}
                    onChange={handleChange}
                    placeholder="Số điện thoại"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <TextField
                    label="Email"
                    id="outlined-margin-dense"
                    name="empEmail"
                    value={stateContainer.empEmail}
                    onChange={handleChange}
                    placeholder="Email"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <TextField
                    label="Tên đăng nhập"
                    id="outlined-margin-dense"
                    name="empUserName"
                    value={stateContainer.empUserName}
                    onChange={handleChange}
                    placeholder="Tên đăng nhập"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <TextField
                    label="Mật khẩu đăng nhập"
                    id="outlined-margin-dense"
                    name="empUserPass"
                    value={stateContainer.empUserPass}
                    onChange={handleChange}
                    placeholder="Mật khẩu đăng nhập"
                    className={` without-padding`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <Divider />
              <List>
                {routes.map((obj, key) => rederListItem(props, obj, key))}
              </List>
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
                  <Fab
                    style={{ marginRight: '5px' }}
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="changepass"
                    onClick={handleChangePass}
                  >
                    <SwapVert />
                    Thay đổi mật khẩu
                  </Fab>
                </GridItem>
              </GridContainer>
              <span className={classes.lvwContainer}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <AgGrid
                      dataSource={userLst}
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

export default Emp;
