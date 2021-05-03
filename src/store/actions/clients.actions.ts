import {
  DeleteClient,
  DeleteClientSuccess,
  GetClients,
  GetClientsSuccess,
  SaveClient,
  SaveClientSuccess,
  TClient,
  TClientNew,
  UpdateClient,
  UpdateClientSuccess,
} from '../types/clients.types';
import { CLIENTS_ACTIONS } from './types';

export function updateClient(client: TClient): UpdateClient {
  return {
    type: CLIENTS_ACTIONS.UPDATE_CLIENT,
    payload: client,
  };
}
export function updateClientSuccess(client: TClient): UpdateClientSuccess {
  return {
    type: CLIENTS_ACTIONS.UPDATE_CLIENT_SUCCESS,
    payload: client,
  };
}

export function deleteClient(id: string): DeleteClient {
  return {
    type: CLIENTS_ACTIONS.DELETE_CLIENT,
    payload: id,
  };
}
export function deleteClientSuccess(id: string): DeleteClientSuccess {
  return {
    type: CLIENTS_ACTIONS.DELETE_CLIENT_SUCCESS,
    payload: id,
  };
}

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
