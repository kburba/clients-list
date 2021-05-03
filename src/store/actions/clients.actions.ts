import {
  GetClients,
  GetClientsSuccess,
  SaveClient,
  SaveClientSuccess,
  TClient,
  TClientNew,
} from '../types/clients.types';
import { CLIENTS_ACTIONS } from './types';

export function saveClient(client: TClientNew): SaveClient {
  return {
    type: CLIENTS_ACTIONS.SAVE_CLIENT,
    payload: client,
  };
}
export function saveClientSuccess(client: TClient): SaveClientSuccess {
  return {
    type: CLIENTS_ACTIONS.SAVE_CLIENT_SUCCESS,
    payload: client,
  };
}

export function getClients(): GetClients {
  return {
    type: CLIENTS_ACTIONS.GET_CLIENTS,
  };
}

export function getClientsSuccess(servers: TClient[]): GetClientsSuccess {
  return {
    type: CLIENTS_ACTIONS.GET_CLIENTS_SUCCESS,
    payload: servers,
  };
}
