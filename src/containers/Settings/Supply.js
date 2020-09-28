import React from 'react';
import SupplyComponent from '../../components/Settings/Supply';
import { connect } from 'react-redux';
import { getAllSupply, patchSupplybyID, insertSupply } from '../../actions';

class Supply extends React.Component {
  columns = [
    {
      headerName: 'Mã nhà cung cấp',
      field: 'supNo',
      suppressSizeToFit: true,
      resizable: true,
      width: 400,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Tên nhà cung cấp',
      field: 'supName',
      width: 500,
      resizable: true,
      sortable: true,
      filter: true
    }
  ];
  state = {
    _id: '',
    supNo: '',
    supName: ''
  };
  componentDidMount() {
    const { dispatch, supplies } = this.props;
    supplies.loading = false;
    dispatch(getAllSupply());
  }
  onCellKeyDown(e) {
    if (e.event.keyCode === 46) {
      var selectedRows = this.gridApi.getSelectedRows()[0];
      if (window.confirm('Bạn chắc chắn muốn xóa thồng tin này ?')) {
        const { dispatch } = this.props;
        let obj = selectedRows != null ? selectedRows : '';
        if (obj) {
          let body = [{ propName: 'status', value: 'delete' }];
          this.gridApi.updateRowData({ remove: [selectedRows] });
          dispatch(patchSupplybyID(obj._id, body));
        }
      }
    }
  }
  onRowDoubleClicked() {
    var selectedNodes = this.gridApi.getSelectedNodes()[0];
    if (selectedNodes && selectedNodes.data) {
      this.setState({
        supName: selectedNodes.data.supName,
        supNo: selectedNodes.data.supNo,
        _id: selectedNodes.data._id
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
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmitAdd = event => {
    event.preventDefault();
    const { supName, supNo } = this.state;
    const { dispatch, supplies } = this.props;
    if (supNo === '') {
      alert('Bạn phải điền đầy đủ thông tin');
      return;
    }
    var checkDup = supplies.data.filter(item => item.supNo === supNo).length;
    if (checkDup > 0) {
      alert('Mã này đã có trong hệ thống');
      return;
    }
    let body = {
      supNo: supNo,
      supName: supName
    };
    supplies.loading = false;
    dispatch(insertSupply(body));
  };
  handleSubmitUpdate = event => {
    event.preventDefault();
    var selectedNodes = this.gridApi.getSelectedNodes()[0];
    if (selectedNodes != null && selectedNodes.data != null) {
      if (
        window.confirm(
          `Bạn chắc chắn muốn cập nhật cho: ${selectedNodes.data.supNo}  ?`
        )
      ) {
        const { supNo, supName, _id } = this.state;
        const { dispatch, supplies } = this.props;
        if (selectedNodes.data.supNo !== supNo) {
          var checkDup = supplies.data.filter(item => item.supNo === supNo)
            .length;
          if (checkDup > 0) {
            alert('Mã này đã có trong hệ thống');
            return;
          }
        }
        let body = [
          { propName: 'supNo', value: supNo },
          { propName: 'supName', value: supName }
        ];
        supplies.loading = false;
        dispatch(patchSupplybyID(_id, body));
      }
    } else return;
  };
  render() {
    return (
      <SupplyComponent
        stateContainer={this.state}
        SupplyLst={{
          rowData: this.props.supplies.data,
          columnDefs: this.columns
        }}
        onCellKeyDown={this.onCellKeyDown.bind(this)}
        onGridReady={this.onGridReady}
        onPaginationChanged={this.onPaginationChanged.bind(this)}
        onBtFirst={this.onBtFirst.bind(this)}
        onBtLast={this.onBtLast.bind(this)}
        onBtNext={this.onBtNext.bind(this)}
        onBtPrevious={this.onBtPrevious.bind(this)}
        onRowDoubleClicked={this.onRowDoubleClicked.bind(this)}
        handleChange={this.handleChange}
        handleSubmitAdd={this.handleSubmitAdd}
        handleSubmitUpdate={this.handleSubmitUpdate}
      />
    );
  }
}
function setText(selector, text) {
  document.querySelector(selector).innerHTML = text;
}
const mapStateToProps = state => {
  const { supplies } = state;
  return { supplies };
};
export default connect(mapStateToProps)(Supply);
