import { takeLatest, put } from 'redux-saga/effects';
import {
  getClientsSuccess,
  saveClientSuccess,
} from '../actions/clients.actions';
import { CLIENTS_ACTIONS } from '../actions/types';
import { SaveClient } from '../types/clients.types';
import { v4 as uuidv4 } from 'uuid';

export function* saveClientSaga({ payload }: SaveClient) {
  try {
    const currClients = localStorage.getItem('clients');
    const newClient = { ...payload, id: uuidv4() };
    const updatedClients = currClients
      ? [...JSON.parse(currClients), newClient]
      : [{ ...payload, id: uuidv4() }];
    localStorage.setItem('clients', JSON.stringify(updatedClients));
    yield put(saveClientSuccess(newClient));
  } catch (error) {
    console.error(error.message);
  }
}
export function* getClientsSaga() {
  try {
    const CLIENTS_FROM_STORAGE = localStorage.getItem('clients');
    if (CLIENTS_FROM_STORAGE) {
      yield put(getClientsSuccess(JSON.parse(CLIENTS_FROM_STORAGE)));
    }
  } catch (error) {
    console.error(error.message);
  }
}

export default function* watchClientsSaga() {
  yield takeLatest(CLIENTS_ACTIONS.GET_CLIENTS, getClientsSaga);
  yield takeLatest(CLIENTS_ACTIONS.SAVE_CLIENT, saveClientSaga);
}
