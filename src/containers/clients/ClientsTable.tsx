import React from 'react';
import Table from '../../components/Table/Table';
import { TableColumn } from '../../components/Table/table.types';
import { TClient } from '../../store/types/clients.types';

type Props = {
  clients: TClient[];
};

export default function ClientsTable({ clients }: Props) {
  return (
    <div>
      <Table data={clients} columns={TABLE_COLUMNS} />
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
];
