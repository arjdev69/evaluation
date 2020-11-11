import {combineReducers} from 'redux';

//import messages from './messages/reducer';
import Modal from './Modal/reducer';
import Calculator from './Calculator/reducer';
import Machine from './Machines/reducer';

export default combineReducers({
  Calculator: Calculator,
  Modal: Modal,
  machine: Machine,
});
