import React from 'react';
import Modal from 'react-modal';
import { TClientNew } from '../../store/types/clients.types';
import ClientForm from './ClientForm';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSave: (client: TClientNew) => void;
};

export default function ClientsModal({ isOpen, setIsOpen, handleSave }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Example Modal"
      className="kbmodal"
    >
      <ClientForm setIsOpen={setIsOpen} onSave={handleSave} />
    </Modal>
  );
}
