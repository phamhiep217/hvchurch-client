import React from 'react';
import ProductComponent from '../../components/Settings/Product';
import lodash from 'lodash';
import { connect } from 'react-redux';
import {
  getAllProduct,
  getAllSupply,
  insertProduct,
  patchProductbyID
} from '../../actions';

class Product extends React.Component {
  columnproducts = [
    {
      headerName: 'Mã NVL',
      field: 'proNo',
      suppressSizeToFit: true,
      resizable: true,
      width: 150,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Mô tả',
      field: 'proName',
      width: 300,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Mã nhóm NVL',
      field: 'proCode2',
      width: 150,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Mã NCC',
      field: 'proSupply',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'ĐVT',
      field: 'proUnit',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Loại NVL',
      field: 'proStyle',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Nguồn hàng',
      field: 'proSource',
      width: 50,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Đặc tính',
      field: 'proNumber',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Công ty',
      field: 'proCompany',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Mã Code 1',
      field: 'proCode1',
      width: 100,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Mã Code 2',
      field: 'proCode2',
      width: 150,
      resizable: true,
      sortable: true,
      filter: true
    },
    {
      headerName: 'Mã Code 3',
      field: 'proCode3',
      width: 150,
      resizable: true,
      sortable: true,
      filter: true
    }
  ];
  state = {
    _id: '',
    proNo: '',
    proName: '',
    proUnit: '',
    proSupply: null,
    proSupplyName: '',
    proStyle: '',
    proSource: '',
    proNumber: '',
    proCompany: '',
    proCode1: '',
    proCode2: '',
    proCode3: ''
  };
  componentDidMount() {
    const { dispatch, products, supplies } = this.props;
    supplies.loading = false;
    dispatch(getAllSupply());
    products.loading = false;
    dispatch(getAllProduct());
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
          dispatch(patchProductbyID(obj._id, body));
        }
      }
    }
  }
  onRowDoubleClicked() {
    var selectedNodes = this.gridApi.getSelectedNodes()[0];
    if (selectedNodes && selectedNodes.data) {
      const { supplies } = this.props;
      let objSupply = {};
      if (supplies.data) {
        var arrSup = lodash.filter(supplies.data, {
          supNo: selectedNodes.data.proSupply
        });
        if (arrSup.length > 0)
          objSupply = { code: arrSup[0].supNo, name: arrSup[0].supName };
      }
      this.setState({
        _id: selectedNodes.data._id,
        proNo: selectedNodes.data.proNo,
        proName: selectedNodes.data.proName,
        proUnit: selectedNodes.data.proUnit,
        proSupply: objSupply,
        proStyle: selectedNodes.data.proStyle,
        proSource: selectedNodes.data.proSource,
        proNumber: selectedNodes.data.proNumber,
        proCompany: selectedNodes.data.proCompany,
        proCode1: selectedNodes.data.proCode1,
        proCode2: selectedNodes.data.proCode2,
        proCode3: selectedNodes.data.proCode3
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
  handleBlurProNo = event => {
    const { name, value } = event.target;
    let objCode = this.genCode(value);
    const { supplies } = this.props;
    let objSupply = null;
    if (supplies.data) {
      var arrSup = lodash.filter(supplies.data, {
        supNo: objCode.proSupply
      });
      if (arrSup.length > 0)
        objSupply = { code: arrSup[0].supNo, name: arrSup[0].supName };
    }
    this.setState({
      proSupply: objSupply,
      proUnit: 'kg',
      proStyle: objCode.proStyle,
      proSource: objCode.proSource,
      proNumber: objCode.proNumber,
      proCompany: objCode.proCompany,
      proCode1: objCode.proCode1,
      proCode2: objCode.proCode2,
      proCode3: objCode.proCode3
    });
  };

  handleSubmitAdd = event => {
    event.preventDefault();
    const {
      proNo,
      proName,
      proUnit,
      proSupply,
      proStyle,
      proSource,
      proNumber,
      proCompany,
      proCode1,
      proCode2,
      proCode3
    } = this.state;
    const { dispatch, products } = this.props;
    if (proNo === '' || proName === '') {
      alert('Bạn phải điền đầy đủ thông tin');
      return;
    }
    var checkDup = products.data.filter(item => item.proNo === proNo).length;
    if (checkDup > 0) {
      alert('Mã này đã có trong hệ thống');
      return;
    }
    let body = {
      proNo: proNo,
      proName: proName,
      proUnit: proUnit,
      proSupply: proSupply.code,
      proStyle: proStyle,
      proSource: proSource,
      proNumber: proNumber,
      proCompany: proCompany,
      proCode1: proCode1,
      proCode2: proCode2,
      proCode3: proCode3,
      proMin: 0,
      proPacking: 0,
      proUOM: '',
      proLeadTime: ''
    };
    products.loading = false;
    dispatch(insertProduct(body));
  };
  genCode = code => {
    let objCode = {
      proStyle: '',
      proSource: '',
      proNumber: '',
      proCompany: '',
      proCode1: '',
      proCode2: '',
      proCode3: '',
      proSupply: ''
    };
    if (code) {
      objCode.proStyle = code.substr(0, 2);
      objCode.proCompany = code.substr(2, 2);
      objCode.proSource = code.substr(4, 1);
      objCode.proSupply = code.substr(4, 4);
      objCode.proCode1 = code.substr(9, 5);
      objCode.proNumber = code.substr(-3, 3);
      objCode.proCode2 =
        objCode.proStyle + objCode.proCompany + '-' + objCode.proCode1;
      objCode.proCode3 =
        objCode.proStyle +
        objCode.proCompany +
        objCode.proSource +
        '-' +
        objCode.proCode1;
    }
    return objCode;
  };
  handleSubmitUpdate = event => {
    event.preventDefault();
    var selectedNodes = this.gridApi.getSelectedNodes()[0];
    if (selectedNodes != null && selectedNodes.data != null) {
      if (
        window.confirm(
          `Bạn chắc chắn muốn cập nhật cho: ${selectedNodes.data.proNo}  ?`
        )
      ) {
        const {
          proNo,
          proName,
          proCode2,
          proUnit,
          proSupply,
          _id,
          proStyle,
          proSource,
          proNumber,
          proCompany,
          proCode1,
          proCode3
        } = this.state;
        const { dispatch, products } = this.props;
        if (selectedNodes.data.proNo !== proNo) {
          var checkDup = products.data.filter(item => item.proNo === proNo)
            .length;
          if (checkDup > 0) {
            alert('Mã này đã có trong hệ thống');
            return;
          }
        }
        // let obj = selectedNodes.data;
        // obj['proNo'] = proNo;
        // obj['proName'] = proName;
        // obj['proCode2'] = proCode2;
        // obj['proUnit'] = proUnit;
        // obj['proSupply'] = proSupply.code;
        // obj['proStyle'] = proStyle;
        // obj['proSource'] = proSource;
        // obj['proNumber'] = proNumber;
        // obj['proCompany'] = proCompany;
        // obj['proCode1'] = proCode1;
        // obj['proCode3'] = proCode3;
        let body = [
          { propName: 'proNo', value: proNo },
          { propName: 'proName', value: proName },
          { propName: 'proCode2', value: proCode2 },
          { propName: 'proUnit', value: proUnit },
          { propName: 'proSupply', value: proSupply.code },
          { propName: 'proStyle', value: proStyle },
          { propName: 'proSource', value: proSource },
          { propName: 'proNumber', value: proNumber },
          { propName: 'proCompany', value: proCompany },
          { propName: 'proCode1', value: proCode1 },
          { propName: 'proCode3', value: proCode3 }
        ];
        //selectedNodes.setData(obj);
        products.loading = false;
        dispatch(patchProductbyID(_id, body));
      }
    } else return;
  };
  handleChangeSup = (event, newValue) => {
    this.setState({ proSupply: newValue });
  };
  supplyLst = supplies => {
    const lst = supplies.data ? supplies.data : [];
    return lst.map(obj => {
      if (obj) {
        return { code: obj.supNo, name: obj.supName };
      }
      return { code: '', name: '' };
    });
  };
  render() {
    const { supplies } = this.props;
    let listSupply = this.supplyLst(supplies);
    return (
      <ProductComponent
        stateContainer={this.state}
        ProductLst={{
          rowData: this.props.products.data,
          columnDefs: this.columnproducts
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
        //combobox supply
        listSup={listSupply}
        handleChangeSup={this.handleChangeSup}
        handleBlurProNo={this.handleBlurProNo}
      />
    );
  }
}
function setText(selector, text) {
  document.querySelector(selector).innerHTML = text;
}
const mapStateToProps = state => {
  const { products, supplies } = state;
  return { products, supplies };
};
export default connect(mapStateToProps)(Product);
