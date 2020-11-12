import {combineReducers} from 'redux';

//import messages from './messages/reducer';
import Modal from './Modal/reducer';
import Place from './Places/reducer';

export default combineReducers({
  Places: Place,
  Modal: Modal,
});
