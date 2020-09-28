import React from 'react';
import RptInventoryNVLComponent from '../../components/inventory/rptInventoryNVL';
import { connect } from 'react-redux';
import {
  getBCTKNVL200,
  getBCTKNVL100,
  getBCTKTP100,
  getBCTKTP200
} from '../../actions';
import { convertFromDate } from '../../helpers';

class RptInventoryNVL extends React.Component {
  state = {
    invFromDate: new Date(),
    invToDate: new Date()
  };
  componentDidMount() {}

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

  handleRptNVL100 = event => {
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
    dispatch(getBCTKNVL100(body));
  };
  handleRptNVL200 = event => {
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
    dispatch(getBCTKNVL200(body));
  };
  handleRptTP100 = event => {
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
    dispatch(getBCTKTP100(body));
  };
  handleRptTP200 = event => {
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
    dispatch(getBCTKTP200(body));
  };
  render() {
    return (
      <RptInventoryNVLComponent
        loading={this.props.inventories.loading}
        stateContainer={this.state}
        handleFromDateChange={this.handleFromDateChange}
        handleToDateChange={this.handleToDateChange}
        handleRptNVL100={this.handleRptNVL100}
        handleRptNVL200={this.handleRptNVL200}
        handleRptTP100={this.handleRptTP100}
        handleRptTP200={this.handleRptTP200}
      />
    );
  }
}
const mapStateToProps = state => {
  const { inventories } = state;
  return { inventories };
};
export default connect(mapStateToProps)(RptInventoryNVL);
