import React from 'react';
import EmpComponent from '../../components/Settings/Emp';
import { connect } from 'react-redux';
import { getAllUser, insertUser, patchUserbyID } from '../../actions';
class Emp extends React.Component {
  columnUsers = [
    {
      headerName: 'Mã nhân viên',
      field: 'empCode',
      suppressSizeToFit: true,
      resizable: true,
      width: 200,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Tên nhân viên',
      field: 'empName',
      width: 200,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Email',
      field: 'empEmail',
      width: 200,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'SĐT',
      field: 'empPhone',
      width: 200,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'UserName',
      field: 'empUserName',
      width: 200,
      resizable: true,
      sortable: true,
      filter: true
    }
  ];
  state = {
    _id: '',
    empCode: '',
    empName: '',
    empPhone: '',
    empEmail: '',
    empRole: [],
    empUserName: '',
    empUserPass: '123456',
    checked: [5],
    arrRole: []
  };
  componentDidMount() {
    const { dispatch, user } = this.props;
    user.loading = false;
    dispatch(getAllUser());
  }
  handleSubmitAdd = event => {
    event.preventDefault();
    const {
      empCode,
      empName,
      empPhone,
      empEmail,
      empUserName,
      empUserPass,
      checked
    } = this.state;
    const { dispatch, user } = this.props;
    if (empCode === '' || empUserName === '') {
      alert('Bạn phải điền đầy đủ thông tin');
      return;
    }
    let body = {
      empCode: empCode,
      empName: empName,
      empPhone: empPhone,
      empEmail: empEmail,
      empUserName: empUserName,
      empUserPass: empUserPass,
      empRole: checked
    };
    user.loading = false;
    dispatch(insertUser(body));
  };
  handleChangePass = event => {
    event.preventDefault();
    var selectedNodes = this.gridApi.getSelectedNodes()[0];
    if (selectedNodes != null && selectedNodes.data != null) {
      if (
        window.confirm(
          `Bạn muốn thay đổi mật khẩu cho user: ${
            selectedNodes.data.empCode
          }  ?`
        )
      ) {
        const { _id, empUserPass } = this.state;
        const { dispatch, user } = this.props;
        if (empUserPass === '') {
          alert('Mật khẩu không được để trống');
          return;
        }
        let body = [{ propName: 'empUserPass', value: empUserPass }];
        user.loading = false;
        dispatch(patchUserbyID(_id, body));
      }
    } else return;
  };
  handleSubmitUpdate = event => {
    event.preventDefault();
    var selectedNodes = this.gridApi.getSelectedNodes()[0];
    if (selectedNodes != null && selectedNodes.data != null) {
      if (
        window.confirm(
          `Bạn chắc chắn muốn cập nhật cho: ${selectedNodes.data.empCode}  ?`
        )
      ) {
        const {
          _id,
          empCode,
          empName,
          empPhone,
          empEmail,
          empUserName,
          checked
        } = this.state;
        const { dispatch, user } = this.props;
        // let obj = selectedNodes.data;
        // obj['empCode'] = empCode;
        // obj['empName'] = empName;
        // obj['empPhone'] = empPhone;
        // obj['empEmail'] = empEmail;
        // obj['empUserName'] = empUserName;
        // obj['empRole'] = checked;
        let body = [
          { propName: 'empCode', value: empCode },
          { propName: 'empName', value: empName },
          { propName: 'empPhone', value: empPhone },
          { propName: 'empEmail', value: empEmail },
          { propName: 'empUserName', value: empUserName },
          { propName: 'empRole', value: checked }
        ];
        //selectedNodes.setData(obj);
        user.loading = false;
        dispatch(patchUserbyID(_id, body));
      }
    } else return;
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({ checked: newChecked });
  };
  onCellKeyDown(e) {
    if (e.event.keyCode === 46) {
      var selectedRows = this.gridApi.getSelectedRows()[0];
      if (window.confirm('Bạn chắc chắn muốn xóa thồng tin này ?')) {
        const { dispatch } = this.props;
        let obj = selectedRows != null ? selectedRows : '';
        if (obj) {
          let body = [{ propName: 'status', value: 'delete' }];
          this.gridApi.updateRowData({ remove: [selectedRows] });
          dispatch(patchUserbyID(obj._id, body));
        }
      }
    }
  }
  onRowDoubleClicked() {
    var selectedNodes = this.gridApi.getSelectedNodes()[0];
    if (selectedNodes && selectedNodes.data) {
      this.setState({
        empCode: selectedNodes.data.empCode,
        empName: selectedNodes.data.empName,
        _id: selectedNodes.data._id,
        empEmail: selectedNodes.data.empEmail,
        empPhone: selectedNodes.data.empPhone,
        empUserName: selectedNodes.data.empUserName,
        checked: selectedNodes.data.empRole
      });
    }
  }
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    if (this.gridApi) {
      setText('#lbCurrentPage', this.gridApi.paginationGetCurrentPage() + 1);
      setText('#lbTotalPages', this.gridApi.paginationGetTotalPages());
    }
  };
  onPaginationChanged() {
    if (this.gridApi) {
      setText('#lbCurrentPage', this.gridApi.paginationGetCurrentPage() + 1);
      setText('#lbTotalPages', this.gridApi.paginationGetTotalPages());
    }
  }
  onBtFirst() {
    this.gridApi.paginationGoToFirstPage();
  }
  onBtLast() {
    this.gridApi.paginationGoToLastPage();
  }
  onBtNext() {
    this.gridApi.paginationGoToNextPage();
  }
  onBtPrevious() {
    this.gridApi.paginationGoToPreviousPage();
  }
  render() {
    return (
      <EmpComponent
        stateContainer={this.state}
        handleChange={this.handleChange}
        handleSubmitAdd={this.handleSubmitAdd}
        handleChangePass={this.handleChangePass}
        handleSubmitUpdate={this.handleSubmitUpdate}
        handleToggle={this.handleToggle}
        //Grid Nhân Viên
        userLst={{
          rowData: this.props.user.data,
          columnDefs: this.columnUsers
        }}
        onCellKeyDown={this.onCellKeyDown.bind(this)}
        onGridReady={this.onGridReady}
        onPaginationChanged={this.onPaginationChanged.bind(this)}
        onBtFirst={this.onBtFirst.bind(this)}
        onBtLast={this.onBtLast.bind(this)}
        onBtNext={this.onBtNext.bind(this)}
        onBtPrevious={this.onBtPrevious.bind(this)}
        onRowDoubleClicked={this.onRowDoubleClicked.bind(this)}
      />
    );
  }
}
function setText(selector, text) {
  document.querySelector(selector).innerHTML = text;
}
const mapStateToProps = state => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps)(Emp);
