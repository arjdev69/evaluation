import {all} from 'redux-saga/effects';

import tasks from './Tasks/sagas';

export default function* rootSaga() {
  return yield all([tasks]);
}
