import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from '../../store/actions/clients.actions';
import { RootState } from '../../store/reducers';
import { ClientsState } from '../../store/types/clients.types';
import ClientsModal from './ClientsModal';
import ClientsTable from './ClientsTable';

export default function Clients() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

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
          className="kbbutton"
          onClick={() => setIsOpen(true)}
        >
          Add Client
        </button>
      </div>
      {clients.length > 0 && <ClientsTable clients={clients} />}
      <ClientsModal isOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
