import { combineReducers } from 'redux'
import clientsReducer from './clients.reducer'

const rootReducer = combineReducers({
  clientsReducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
