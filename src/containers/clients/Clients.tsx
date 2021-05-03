import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getClients,
  saveClient,
  updateClient,
} from '../../store/actions/clients.actions';
import { RootState } from '../../store/reducers';
import {
  ClientsActions,
  ClientsState,
  TClient,
  TClientNew,
} from '../../store/types/clients.types';
import ClientsModal from './ClientsModal';
import ClientsTable from './ClientsTable';

export default function Clients() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalValues, setModalValues] = useState<TClient>();

  const dispatch = useDispatch<Dispatch<ClientsActions>>();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  function handleEditItemClick(item: TClient) {
    setModalValues(item);
    setIsOpen(true);
  }

  function handleSave(client: TClientNew | TClient) {
    if ('id' in client) {
      dispatch(updateClient(client));
    } else {
      dispatch(saveClient(client));
    }
    handleClose();
  }

  function handleClose() {
    setModalValues(undefined);
    setIsOpen(false);
  }

  const { clients } = useSelector<
    RootState,
    {
      clients: ClientsState['clients'];
    }
  >(({ clientsReducer }) => ({
    clients: clientsReducer.clients,
  }));

  return (
    <div className="container">
      <div className="inline space-btw align-cnt">
        <h1>Clients</h1>
        <button
          type="button"
          className="kbbutton primary"
          onClick={() => setIsOpen(true)}
        >
          Add Client
        </button>
      </div>
      {clients.length > 0 && (
        <ClientsTable onEditClick={handleEditItemClick} clients={clients} />
      )}
      <ClientsModal
        isOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleClose={handleClose}
        handleSave={handleSave}
        defaultValues={modalValues}
      />
    </div>
  );
}
