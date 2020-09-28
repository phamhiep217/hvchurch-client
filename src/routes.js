// @material-ui/icons
import Emp from './containers/Settings/Emp';
import PaymentIn from './containers/Settings/PaymentIn';
import Product from './containers/Settings/Product';
import Supply from './containers/Settings/Supply';
import Login from './containers/Login';
import PurIn from './containers/purchasing/PurIn';
import PurInSearch from './containers/purchasing/PurInSearch';
import RptInventory from './containers/inventory/rptInventory';
import RptInventoryNVL from './containers/inventory/rptInventoryNVL';
import UserInfor from './containers/Settings/UserInfor';
const dashboardRoutes = [
  {
    id: 1,
    path: '/PO',
    name: 'Mua hàng trong nước',
    icon: 'assignment_ind',
    component: PurInSearch,
    layout: '/home'
  },
  {
    id: 9,
    path: '/INV',
    name: 'Tồn kho',
    icon: 'assignment_ind',
    component: RptInventory,
    layout: '/home'
  },
  {
    id: 10,
    path: '/InvProductStyle',
    name: 'Xuất Nhập Tồn',
    icon: 'assignment_ind',
    component: RptInventoryNVL,
    layout: '/home'
  },
  {
    id: 2,
    path: '/setting',
    name: 'Thiết đặt',
    icon: 'settings',
    layout: '/home',
    collapse: true,
    childs: [
      {
        id: 3,
        name: 'Nhân viên',
        icon: 'assignment_ind',
        path: '/emp',
        component: Emp
      },
      {
        id: 6,
        name: 'Chính sách thanh toán',
        icon: 'assignment_ind',
        path: '/paymentIn',
        component: PaymentIn
      },
      {
        id: 7,
        name: 'NVL',
        icon: 'assignment_ind',
        path: '/product',
        component: Product
      },
      {
        id: 8,
        name: 'Nhà cung cấp',
        icon: 'assignment_ind',
        path: '/supply',
        component: Supply
      }
    ]
  },
  {
    id: 4,
    path: '/userinfo',
    name: 'Thông tin cá nhân',
    icon: 'contacts',
    component: UserInfor,
    layout: '/home'
  },
  {
    id: 5,
    path: '',
    name: 'Đăng Xuất',
    icon: 'settings_power',
    component: Login,
    layout: '/login'
  }
];

export default dashboardRoutes;
