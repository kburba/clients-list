import { takeLatest, put } from 'redux-saga/effects';
import {
  deleteClientSuccess,
  getClientsSuccess,
  saveClientSuccess,
} from '../actions/clients.actions';
import { CLIENTS_ACTIONS } from '../actions/types';
import { DeleteClient, SaveClient, TClient } from '../types/clients.types';
import { v4 as uuidv4 } from 'uuid';

export function* deleteClientsSaga({ payload }: DeleteClient) {
  try {
    const currClients = localStorage.getItem('clients');
    if (currClients) {
      const parsedClients: TClient[] = JSON.parse(currClients);
      const filteredClients = parsedClients.filter((x) => x.id !== payload);
      localStorage.setItem('clients', JSON.stringify(filteredClients));
      yield put(deleteClientSuccess(payload));
    }
  } catch (error) {
    console.error(error.message);
  }
}

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
  yield takeLatest(CLIENTS_ACTIONS.DELETE_CLIENT, deleteClientsSaga);
}
