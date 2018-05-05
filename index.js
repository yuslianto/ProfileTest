import { combineReducers } from 'redux';

import nav from './nav';
import paymentReducer from './payment';

const reducers = combineReducers({
  nav,

});

export default reducers;
