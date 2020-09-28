import React from 'react';
import PaymentInComponent from '../../components/Settings/PaymentIn';
import { connect } from 'react-redux';
import { getAllPayment, patchPaymentbyID, insertPayment } from '../../actions';

class PaymentIn extends React.Component {
  columnPayments = [
    {
      headerName: 'Chính sách thanh toán',
      field: 'payName',
      suppressSizeToFit: true,
      resizable: true,
      width: 400,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Thời hạn thanh toán',
      field: 'payNum',
      width: 500,
      resizable: true,
      sortable: true,
      filter: true
    }
  ];
  state = {
    _id: '',
    payName: '',
    payNum: ''
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getAllPayment());
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
          dispatch(patchPaymentbyID(obj._id, body));
        }
      }
    }
  }
  onRowDoubleClicked() {
    var selectedNodes = this.gridApi.getSelectedNodes()[0];
    if (selectedNodes && selectedNodes.data) {
      this.setState({
        payName: selectedNodes.data.payName,
        payNum: selectedNodes.data.payNum,
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
    const { payName, payNum } = this.state;
    const { dispatch } = this.props;
    if (payName === '' || payNum === '') {
      alert('Bạn phải điền đầy đủ thông tin');
      return;
    }
    let body = {
      payName: payName,
      payNum: payNum,
      payStyle: 'I'
    };
    dispatch(insertPayment(body));
  };
  handleSubmitUpdate = event => {
    event.preventDefault();
    var selectedNodes = this.gridApi.getSelectedNodes()[0];
    if (selectedNodes != null && selectedNodes.data != null) {
      if (
        window.confirm(
          `Bạn chắc chắn muốn cập nhật cho: ${selectedNodes.data.payName}  ?`
        )
      ) {
        const { payNum, payName, _id } = this.state;
        const { dispatch } = this.props;
        // let obj = selectedNodes.data;
        // obj['payName'] = payName;
        // obj['payNum'] = payNum;
        let body = [
          { propName: 'payName', value: payName },
          { propName: 'payNum', value: payNum }
        ];
        //selectedNodes.setData(obj);
        dispatch(patchPaymentbyID(_id, body));
      }
    } else return;
  };
  render() {
    return (
      <PaymentInComponent
        stateContainer={this.state}
        PaymentLst={{
          rowData: this.props.payments.data,
          columnDefs: this.columnPayments
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
  const { payments } = state;
  return { payments };
};
export default connect(mapStateToProps)(PaymentIn);
