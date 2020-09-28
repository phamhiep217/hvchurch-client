import { combineReducers } from 'redux';

import { auth } from './_auth';
import { supplies, products, payments, user } from './masterdata';
import { inventories } from './inventory';
import { purchase } from './purchase';

const rootReducer = combineReducers({
  auth,
  user,
  supplies,
  products,
  payments,
  inventories,
  purchase
});

export default rootReducer;
