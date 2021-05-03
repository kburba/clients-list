import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import Table from '../../components/Table/Table';
import {
  TableAction,
  TableButtonTypes,
  TableColumn,
} from '../../components/Table/table.types';
import { deleteClient } from '../../store/actions/clients.actions';
import { ClientsActions, TClient } from '../../store/types/clients.types';

type Props = {
  clients: TClient[];
  onEditClick: (item: TClient) => void;
};

export default function ClientsTable({ clients, onEditClick }: Props) {
  const dispatch = useDispatch<Dispatch<ClientsActions>>();

  const TABLE_ACTIONS: TableAction[] = [
    {
      action: (item: TClient) => {
        console.log('edit', item);
        onEditClick(item);
      },
      key: TableButtonTypes.EDIT,
    },
    {
      action: (item: TClient) => {
        console.log('delete', item);
        dispatch(deleteClient(item.id));
      },
      key: TableButtonTypes.DELETE,
    },
  ];
  return (
    <div>
      <Table actions={TABLE_ACTIONS} data={clients} columns={TABLE_COLUMNS} />
    </div>
  );
}

const TABLE_COLUMNS: TableColumn[] = [
  {
    title: 'First',
    valueKey: 'firstName',
  },
  {
    title: 'Last',
    valueKey: 'lastName',
  },
  {
    title: 'Phone',
    valueKey: 'phone',
  },
  {
    title: 'Address',
    valueKey: 'address',
  },
  {
    title: 'Action',
    valueKey: '',
    type: 'buttons',
    buttons: [TableButtonTypes.EDIT, TableButtonTypes.DELETE],
  },
];
