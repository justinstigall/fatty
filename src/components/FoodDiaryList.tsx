import type { FoodDiaryEntry } from '../types.ts'
import { Table } from '@radix-ui/themes'

export function FoodDiaryList({ entries }: { entries: FoodDiaryEntry[] }) {
  return (
    <div>
      <h2>Food Diary Entries</h2>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Food</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Calories</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Notes</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {entries.map(entry => (
            <Table.Row key={entry.id}>
              <Table.Cell>{entry.food.name}</Table.Cell>
              <Table.Cell>{entry.quantity}</Table.Cell>
              <Table.Cell>{new Date(entry.date).toLocaleDateString()}</Table.Cell>
              <Table.Cell>{entry.food.calories}</Table.Cell>
              <Table.Cell>{entry.notes}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}