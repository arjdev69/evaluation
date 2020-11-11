import {Alert} from 'react-native';

import {takeLatest, all, call, put} from 'redux-saga/effects';

import api from 'services';

import {setListTasks} from 'store/modules/Tasks/actions';

export function* getListTasks() {
  try {
    const resp = yield call(api.get, 'lista');

    yield put(setListTasks(resp.data));
  } catch (err) {
    Alert.alert(
      'Falha na requisição',
      'Houve um erro no retorno dos dados, envie um e-mail',
    );
  }
}

// export function* getListTaxs() {
//   try {
//     const resp = yield call(fetch, URL.taxs);

//     const json = yield call([resp, 'json']);

//     yield put(setListTaxCredit(json));
//   } catch (err) {
//     Alert.alert(
//       'Falha na requisição',
//       'Houve um erro no retorno dos dados, envie um e-mail',
//     );
//   }
// }

export default all([
  takeLatest('@UPDATE_VALUE/GET_LIST_TASKS', getListTasks),
  // takeLatest('@UPDATE_VALUE/GET_LIST_TAXS', getListTaxs),
]);
