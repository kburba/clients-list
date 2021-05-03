import { GetClients, GetClientsSuccess, TClient } from '../types/clients.types'
import { CLIENTS_ACTIONS } from './types'

export function getClients(): GetClients {
  return {
    type: CLIENTS_ACTIONS.GET_CLIENTS,
  }
}

export function getClientsSuccess(servers: TClient[]): GetClientsSuccess {
  return {
    type: CLIENTS_ACTIONS.GET_CLIENTS_SUCCESS,
    payload: servers,
  }
}
