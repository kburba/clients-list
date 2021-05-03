import React from 'react';
import Modal from 'react-modal';
import { TClient, TClientNew } from '../../store/types/clients.types';
import ClientForm from './ClientForm';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSave: (client: TClientNew) => void;
  defaultValues?: TClient;
  handleClose: () => void;
};

export default function ClientsModal({
  isOpen,
  setIsOpen,
  handleSave,
  defaultValues,
  handleClose,
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Example Modal"
      className="kbmodal"
    >
      <ClientForm
        handleClose={handleClose}
        onSave={handleSave}
        defaultValues={defaultValues}
      />
    </Modal>
  );
}
