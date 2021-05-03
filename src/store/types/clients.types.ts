import { CLIENTS_ACTIONS } from '../actions/types';

export type ClientsState = {
  clients: TClient[];
};

export type ClientsActions = GetClients | GetClientsSuccess;

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
};
