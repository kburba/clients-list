/** rootSaga.js */
import { all, fork } from 'redux-saga/effects'
import watchClientsSaga from './clients.saga'

// import watchers from other files
export default function* rootSaga() {
  yield all([fork(watchClientsSaga)])
}
