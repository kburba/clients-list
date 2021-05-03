import { CLIENTS_ACTIONS } from '../actions/types';

export type ClientsState = {
  clients: TClient[];
};

export type ClientsActions =
  | GetClients
  | GetClientsSuccess
  | SaveClient
  | SaveClientSuccess;

export interface SaveClient {
  type: typeof CLIENTS_ACTIONS.SAVE_CLIENT;
  payload: TClientNew;
}

export interface SaveClientSuccess {
  type: typeof CLIENTS_ACTIONS.SAVE_CLIENT_SUCCESS;
  payload: TClient;
}

export interface GetClients {
  type: typeof CLIENTS_ACTIONS.GET_CLIENTS;
}

export interface GetClientsSuccess {
  type: typeof CLIENTS_ACTIONS.GET_CLIENTS_SUCCESS;
  payload: TClient[];
}

export type TClient = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  id: string;
};

export type TClientNew = Omit<TClient, 'id'>;
