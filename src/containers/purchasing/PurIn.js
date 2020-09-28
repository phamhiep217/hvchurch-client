import React from 'react';
import PurInComponent from '../../components/purchasing/PurIn';
import { statusShipmentLst, statusPaymentLst } from '../../helpers';
import { connect } from 'react-redux';
import { getAllSupply, getAllProduct, getAllPayment } from '../../actions';

class PurIn extends React.Component {
  state = {
    supName: null,
    proNo: null,
    payName: null,
    statusShipment: null,
    statusPayment: null
  };
  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch(getAllSupply());
    // dispatch(getAllProduct());
    // dispatch(getAllPayment());
  }

  handleSubmit = event => {
    event.preventDefault();
  };
  handleChangeSup = (event, newValue) => {
    this.setState({ supName: newValue });
  };
  handleChangeStaShip = (event, newValue) => {
    this.setState({ statusShipment: newValue });
  };
  handleChangeStaPay = (event, newValue) => {
    this.setState({ statusPayment: newValue });
  };
  handleChangePro = (event, newValue) => {
    this.setState({ proNo: newValue });
  };
  handleChangePayment = (event, newValue) => {
    this.setState({ payName: newValue });
  };
  onKeyDown = () => event => {};

  supplyLst = supplies => {
    const lst = supplies.data ? supplies.data : [];
    return lst.map(obj => {
      if (obj) {
        return { code: obj.supNo, name: obj.supName };
      }
      return { code: '', name: '' };
    });
  };

  productLst = products => {
    const lst = products.data ? products.data : [];
    return lst.map(obj => {
      if (obj) {
        return { code: obj.proNo, name: obj.proName };
      }
      return { code: '', name: '' };
    });
  };

  paymentLst = payments => {
    const lst = payments.data ? payments.data : [];
    return lst.map(obj => {
      if (obj) {
        return { code: obj.payName, name: obj.payNum };
      }
      return { code: '', name: '' };
    });
  };

  render() {
    console.log('container/PurIn');
    const { supplies, products, payments } = this.props;
    let listSupply = this.supplyLst(supplies);
    let listProduct = this.productLst(products);
    let listPayment = this.paymentLst(payments);
    return (
      <PurInComponent
        statusShipmentLst={statusShipmentLst}
        statusPaymentLst={statusPaymentLst}
        listSupply={listSupply}
        listProduct={listProduct}
        listPayment={listPayment}
        handleSubmit={this.handleSubmit}
        handleChangeSup={this.handleChangeSup}
        handleChangeStaPay={this.handleChangeStaPay}
        handleChangeStaShip={this.handleChangeStaShip}
        handleChangePro={this.handleChangePro}
        handleChangePayment={this.handleChangePayment}
        containState={this.state}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

const mapStateToProps = state => {
  const { supplies, products, payments } = state;
  return { supplies, products, payments };
};
export default connect(mapStateToProps)(PurIn);
