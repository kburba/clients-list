import React from 'react'
import Table from '../../components/Table/Table'
import { TClient } from '../../store/types/clients.types'

type Props = {
  clients: TClient[]
}

const TABLE_COLUMNS = [
  {
    title: 'Name',
    valueKey: 'name',
  },
  {
    title: 'Distance',
    valueKey: 'distance',
  },
]

export default function ClientsTable({ clients }: Props) {
  return (
    <div>
      <Table data={clients} columns={TABLE_COLUMNS} />
    </div>
  )
}
