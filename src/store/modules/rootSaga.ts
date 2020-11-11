import {all} from 'redux-saga/effects';

import machines from './Machines/sagas';

export default function* rootSaga() {
  return yield all([machines]);
}
