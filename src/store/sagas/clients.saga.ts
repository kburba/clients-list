import { takeLatest, put } from 'redux-saga/effects'
import { getClientsSuccess } from '../actions/clients.actions'
import { CLIENTS_ACTIONS } from '../actions/types'

export function* getClientsSaga() {
  try {
    const CLIENTS_FROM_STORAGE = localStorage.getItem('clients')
    if (CLIENTS_FROM_STORAGE) {
      yield put(getClientsSuccess(JSON.parse(CLIENTS_FROM_STORAGE)))
    }
  } catch (error) {
    console.error(error.message)
  }
}

export default function* watchClientsSaga() {
  yield takeLatest(CLIENTS_ACTIONS.GET_CLIENTS, getClientsSaga)
}
