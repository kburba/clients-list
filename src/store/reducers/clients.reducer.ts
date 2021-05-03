import { CLIENTS_ACTIONS } from '../actions/types';
import { ClientsActions, ClientsState } from '../types/clients.types';

export const initialState: ClientsState = {
  clients: [],
};

const clientsReducer = (
  state = initialState,
  action: ClientsActions
): ClientsState => {
  switch (action.type) {
    case CLIENTS_ACTIONS.DELETE_CLIENT_SUCCESS: {
      const clients = state.clients.filter((x) => x.id !== action.payload);
      return {
        ...state,
        clients,
      };
    }
    case CLIENTS_ACTIONS.SAVE_CLIENT_SUCCESS:
      return {
        ...state,
        clients: [...state.clients, action.payload],
      };
    case CLIENTS_ACTIONS.GET_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.payload,
      };
    default:
      return state;
  }
};

export default clientsReducer;
