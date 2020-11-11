import {Alert} from 'react-native';

import {takeLatest, all, call, put} from 'redux-saga/effects';

import {URL} from 'utils/Constants';

import {setListMachine, setListTaxCredit} from './actions';

export function* getListMachines() {
  try {
    const resp = yield call(fetch, URL.machines);

    const json = yield call([resp, 'json']);

    yield put(setListMachine(json));
  } catch (err) {
    Alert.alert(
      'Falha na requisição',
      'Houve um erro no retorno dos dados, envie um e-mail',
    );
  }
}

export function* getListTaxs() {
  try {
    const resp = yield call(fetch, URL.taxs);

    const json = yield call([resp, 'json']);

    yield put(setListTaxCredit(json));
  } catch (err) {
    Alert.alert(
      'Falha na requisição',
      'Houve um erro no retorno dos dados, envie um e-mail',
    );
  }
}

export default all([
  takeLatest('@UPDATE_VALUE/LIST_MACHINES', getListMachines),
  takeLatest('@UPDATE_VALUE/GET_LIST_TAXS', getListTaxs),
]);
