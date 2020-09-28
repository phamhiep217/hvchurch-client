import React from 'react';
import PurInSearchComponent from '../../components/purchasing/PurInSearch';
import PurInComponent from './PurIn';
import { connect } from 'react-redux';
import {
  getAllPurchase,
  getAllSupply,
  getAllProduct,
  getAllPayment
} from '../../actions';

class PurInSearch extends React.Component {
  columnPurLocals = [
    {
      headerName: 'Mã NVL',
      field: 'proNo',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'NCC',
      field: 'supName',
      suppressSizeToFit: true,
      resizable: true,
      width: 200,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Ngày PO',
      field: 'purDate',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Số PO/HĐ',
      field: 'purContract',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Tên NVL',
      field: 'proName',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'ETA',
      field: 'purETADate',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Ngày giao hàng',
      field: 'purShipmentDate',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Partial Shipemnt ("PS")',
      field: 'purPartShip',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Tổng SL còn phải giao',
      field: 'purRemaining',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'STATUS',
      field: 'purShipmentCode',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Ngày Đến Hạn Thanh Toán',
      field: 'purExpDate',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Payment Term',
      field: 'purPaymentTerm',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'purPayment Note',
      field: 'purPaymentNote',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'PAYMENT STATUS ("P"=Paid)',
      field: 'purPaymentCode',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Ghi chú',
      field: 'purNote',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Ghi chú MS/Bán',
      field: 'Cho MS & Bán',
      width: 200,
      suppressSizeToFit: true,
      resizable: true,
      sortable: true,
      filter: true
    }
  ];
  state = {
    supName: null,
    proNo: null,
    payName: null,
    statusShipment: null,
    statusPayment: null
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getAllPurchase());
    dispatch(getAllSupply());
    dispatch(getAllProduct());
    dispatch(getAllPayment());
  }

  handleSubmitAdd = event => {
    event.preventDefault();
    this.setState({ supName: 'AAA' });
  };

  handleSubmitPart = event => {
    event.preventDefault();
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
          //dispatch(patchUserbyID(obj._id, body));
        }
      }
    }
  }
  onRowDoubleClicked() {
    var selectedNodes = this.gridApi.getSelectedNodes()[0];
    if (selectedNodes && selectedNodes.data) {
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
    console.log('container/purInSearch');
    const { purchase } = this.props;
    var purLocalData = purchase.data;
    if (purchase && purchase.data)
      var purLocalData = purchase.data.filter(item => {
        if (item.purStyle === 'O') return item;
      });
    return (
      <div>
        <PurInComponent />
        <PurInSearchComponent
          handleSubmitAdd={this.handleSubmitAdd}
          handleSubmitPart={this.handleSubmitPart}
          containState={this.state}
          //Danh sách Đơn Đặt Hàng trong nước
          PurchaseLst={{
            rowData: purLocalData,
            columnDefs: this.columnPurLocals
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
      </div>
    );
  }
}
function setText(selector, text) {
  document.querySelector(selector).innerHTML = text;
}
const mapStateToProps = state => {
  const { purchase } = state;
  return { purchase };
};
export default connect(mapStateToProps)(PurInSearch);
