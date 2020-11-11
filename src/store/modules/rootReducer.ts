import {combineReducers} from 'redux';

//import messages from './messages/reducer';
import Modal from './Modal/reducer';
import Task from './Tasks/reducer';

export default combineReducers({
  Tasks: Task,
  Modal: Modal,
});
