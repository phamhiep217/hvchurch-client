import React from 'react';
import RptInventoryComponent from '../../components/inventory/rptInventory';
import { connect } from 'react-redux';
import {
  initInvExact,
  getAllInvExact,
  getInvDK,
  getInvKV,
  getBCTK,
  getBCTKTHEOKHO
} from '../../actions';
import { convertFromDate } from '../../helpers';

class RptInventory extends React.Component {
  columnDKs = [
    {
      headerName: 'Mã',
      field: 'invProductNo',
      suppressSizeToFit: true,
      resizable: true,
      width: 150,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Tên NVL',
      field: 'invProductName',
      width: 150,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'ĐVT',
      field: 'invUnit',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Tồn đầu',
      field: 'invOpenningStock',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Nhập',
      field: 'invIn',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Xuất',
      field: 'invOut',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Tồn cuối',
      field: 'invClosingStock',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    }
  ];
  columnKVs = [
    {
      headerName: 'Mã',
      field: 'invProductNo',
      suppressSizeToFit: true,
      resizable: true,
      width: 150,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Tên NVL',
      field: 'invProductName',
      width: 150,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Tồn đầu',
      field: 'invOpenningStock',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Nhập',
      field: 'invIn',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Xuất',
      field: 'invOut',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Tồn cuối',
      field: 'invClosingStock',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    }
  ];
  state = {
    _id: '',
    invFromDate: new Date(),
    invToDate: new Date(),
    fromWH: null,
    toWH: null
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initInvExact());
  }

  onCellKeyDown(e) {}
  onRowDoubleClicked() {}
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    if (this.gridApi) {
      setText(
        '.griddk #lbCurrentPage',
        this.gridApi.paginationGetCurrentPage() + 1
      );
      setText('.griddk #lbTotalPages', this.gridApi.paginationGetTotalPages());
    }
  };
  onPaginationChanged() {
    if (this.gridApi) {
      setText(
        '.griddk #lbCurrentPage',
        this.gridApi.paginationGetCurrentPage() + 1
      );
      setText('.griddk #lbTotalPages', this.gridApi.paginationGetTotalPages());
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

  onCellKeyDownKV(e) {}
  onRowDoubleClickedKV() {}
  onGridReadyKV = params => {
    this.gridKVApi = params.api;
    this.gridColumnKVApi = params.columnApi;
    if (this.gridKVApi) {
      setText(
        '.gridkv #lbCurrentPage',
        this.gridKVApi.paginationGetCurrentPage() + 1
      );
      setText(
        '.gridkv #lbTotalPages',
        this.gridKVApi.paginationGetTotalPages()
      );
    }
  };
  onPaginationChangedKV() {
    if (this.gridKVApi) {
      setText(
        '.gridkv #lbCurrentPage',
        this.gridKVApi.paginationGetCurrentPage() + 1
      );
      setText(
        '.gridkv #lbTotalPages',
        this.gridKVApi.paginationGetTotalPages()
      );
    }
  }
  onBtFirstKV() {
    this.gridKVApi.paginationGoToFirstPage();
  }
  onBtLastKV() {
    this.gridKVApi.paginationGoToLastPage();
  }
  onBtNextKV() {
    this.gridKVApi.paginationGoToNextPage();
  }
  onBtPreviousKV() {
    this.gridKVApi.paginationGoToPreviousPage();
  }

  handleFromDateChange = date => {
    if (date !== 'Invalid Date' && date instanceof Date) {
      this.setState({ invFromDate: date });
    }
  };
  handleToDateChange = date => {
    if (date !== 'Invalid Date' && date instanceof Date) {
      this.setState({ invToDate: date });
    }
  };
  handleSubmitShow = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { invFromDate, invToDate, fromWH, toWH } = this.state;
    let fromWarehouse = fromWH === null ? '0000' : fromWH;
    let toWarehouse = toWH === null ? '3310' : toWH;
    if (invFromDate > invToDate) {
      alert('Ngày bắt đầu phải nhỏ hơn ngày kết thúc');
      return;
    }
    if (fromWarehouse > toWarehouse) {
      alert('Kho cần lấy không hợp lệ');
      return;
    }
    //doi sang YYYY-MM-DD
    let fromDate = convertFromDate(invFromDate);
    let toDate = convertFromDate(invToDate);
    let body = {
      invFromDate: fromDate,
      invToDate: toDate,
      fromWH: fromWarehouse,
      toWH: toWarehouse
    };
    dispatch(getAllInvExact(body));
  };
  handleGetInvDK = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { invFromDate, invToDate, fromWH, toWH } = this.state;
    let fromWarehouse = fromWH === null ? '0000' : fromWH;
    let toWarehouse = toWH === null ? '3310' : toWH;
    if (invFromDate > invToDate) {
      alert('Ngày bắt đầu phải nhỏ hơn ngày kết thúc');
      return;
    }
    if (fromWarehouse > toWarehouse) {
      alert('Kho cần lấy không hợp lệ');
      return;
    }
    //doi sang YYYY-MM-DD
    let fromDate = convertFromDate(invFromDate);
    let toDate = convertFromDate(invToDate);
    let body = {
      invFromDate: fromDate,
      invToDate: toDate,
      fromWH: fromWarehouse,
      toWH: toWarehouse
    };
    dispatch(getInvDK(body));
  };
  handleGetInvKV = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { invFromDate, invToDate, fromWH, toWH } = this.state;
    let fromWarehouse = fromWH === null ? '0000' : fromWH;
    let toWarehouse = toWH === null ? '3310' : toWH;
    if (invFromDate > invToDate) {
      alert('Ngày bắt đầu phải nhỏ hơn ngày kết thúc');
      return;
    }
    if (fromWarehouse > toWarehouse) {
      alert('Kho cần lấy không hợp lệ');
      return;
    }
    //doi sang YYYY-MM-DD
    let fromDate = convertFromDate(invFromDate);
    let toDate = convertFromDate(invToDate);
    let body = {
      invFromDate: fromDate,
      invToDate: toDate,
      fromWH: fromWarehouse,
      toWH: toWarehouse
    };
    dispatch(getInvKV(body));
  };
  handleRptInv = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { invFromDate, invToDate } = this.state;
    if (invFromDate > invToDate) {
      alert('Ngày bắt đầu phải nhỏ hơn ngày kết thúc');
      return;
    }
    //doi sang YYYY-MM-DD
    let fromDate = convertFromDate(invFromDate);
    let toDate = convertFromDate(invToDate);
    let body = {
      invFromDate: fromDate,
      invToDate: toDate
    };
    dispatch(getBCTK(body));
  };
  handleRptInvByWareHouse = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { invFromDate, invToDate } = this.state;
    if (invFromDate > invToDate) {
      alert('Ngày bắt đầu phải nhỏ hơn ngày kết thúc');
      return;
    }
    //doi sang YYYY-MM-DD
    let fromDate = convertFromDate(invFromDate);
    let toDate = convertFromDate(invToDate);
    let body = {
      invFromDate: fromDate,
      invToDate: toDate
    };
    dispatch(getBCTKTHEOKHO(body));
  };
  handleChangeFromWH = (event, newValue) => {
    this.setState({ fromWH: newValue });
  };
  handleChangeToWH = (event, newValue) => {
    this.setState({ toWH: newValue });
  };
  render() {
    const { inventories, warehouse } = this.props;
    let dataKV =
      inventories.data && inventories.data['200']
        ? inventories.data['200']
        : [];
    let dataDK =
      inventories.data && inventories.data['100']
        ? inventories.data['100']
        : [];
    let listWH = warehouse.sort();
    return (
      <RptInventoryComponent
        loading={inventories.loading}
        stateContainer={this.state}
        listWH={listWH}
        //DK
        RptInventoryDKLst={{
          rowData: dataDK,
          columnDefs: this.columnDKs
        }}
        onCellKeyDown={this.onCellKeyDown.bind(this)}
        onGridReady={this.onGridReady}
        onPaginationChanged={this.onPaginationChanged.bind(this)}
        onBtFirst={this.onBtFirst.bind(this)}
        onBtLast={this.onBtLast.bind(this)}
        onBtNext={this.onBtNext.bind(this)}
        onBtPrevious={this.onBtPrevious.bind(this)}
        onRowDoubleClicked={this.onRowDoubleClicked.bind(this)}
        //KV
        RptInventoryKVLst={{
          rowData: dataKV,
          columnDefs: this.columnKVs
        }}
        onCellKeyDownKV={this.onCellKeyDownKV.bind(this)}
        onGridReadyKV={this.onGridReadyKV}
        onPaginationChangedKV={this.onPaginationChangedKV.bind(this)}
        onBtFirstKV={this.onBtFirstKV.bind(this)}
        onBtLastKV={this.onBtLastKV.bind(this)}
        onBtNextKV={this.onBtNextKV.bind(this)}
        onBtPreviousKV={this.onBtPreviousKV.bind(this)}
        onRowDoubleClickedKV={this.onRowDoubleClickedKV.bind(this)}
        //handle
        handleFromDateChange={this.handleFromDateChange}
        handleToDateChange={this.handleToDateChange}
        handleSubmitShow={this.handleSubmitShow}
        handleGetInvDK={this.handleGetInvDK}
        handleGetInvKV={this.handleGetInvKV}
        handleRptInv={this.handleRptInv}
        handleRptInvByWareHouse={this.handleRptInvByWareHouse}
        handleChangeFromWH={this.handleChangeFromWH}
        handleChangeToWH={this.handleChangeToWH}
      />
    );
  }
}
function setText(selector, text) {
  document.querySelector(selector).innerHTML = text;
}
const mapStateToProps = state => {
  const {
    inventories,
    auth: { warehouse }
  } = state;
  return { inventories, warehouse };
};
export default connect(mapStateToProps)(RptInventory);
