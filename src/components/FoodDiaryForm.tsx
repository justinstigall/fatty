import { useState } from 'react'
import type { FoodDiaryEntry } from '../types'
import { Form } from "radix-ui"

// Helper to get current date and time in correct format
function getCurrentDate() {
  return new Date().toISOString().slice(0, 10)
}
function getCurrentTime() {
  return new Date().toTimeString().slice(0, 5)
}

type Props = {
  onAdd: (entry: FoodDiaryEntry) => void
}

export function FoodDiaryForm({ onAdd }: Props) {
  const [foodName, setFoodName] = useState('')
  const [calories, setCalories] = useState('')
  const [quantity, setQuantity] = useState('')
  const [date, setDate] = useState(getCurrentDate())
  const [time, setTime] = useState(getCurrentTime())
  const [notes, setNotes] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!foodName || !calories || !quantity || !date || !time) return

    // Combine date and time into ISO string
    const isoDateTime = new Date(`${date}T${time}`).toISOString()

    const newEntry: FoodDiaryEntry = {
      id: Date.now().toString(),
      food: {
        id: Math.random().toString(36).slice(2),
        name: foodName,
        calories: Number(calories)
      },
      quantity: Number(quantity),
      date: isoDateTime,
      notes: notes || undefined
    }
    onAdd(newEntry)
    setFoodName('')
    setCalories('')
    setQuantity('')
    setDate('')
    setTime('')
    setNotes('')
  }

  const inputStyle = {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    fontSize: '1rem',
    color: '#ffffffff',
    background: '#4b70b7ff',
    outline: 'none',
  }

  return (
    <Form.Root onSubmit={handleSubmit}>
      <Form.Field name="foodName">
        <Form.Label style={{ fontWeight: 500, marginBottom: 4 }}>Food name</Form.Label>
        <Form.Control asChild>
          <input
            type="text"
            placeholder="e.g. Banana"
            value={foodName}
            onChange={e => setFoodName(e.target.value)}
            required
            style={inputStyle}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field name="calories">
        <Form.Label style={{ fontWeight: 500, marginBottom: 4 }}>Calories</Form.Label>
        <Form.Control asChild>
          <input
            type="number"
            placeholder="e.g. 105"
            value={calories}
            onChange={e => setCalories(e.target.value)}
            required
            min={0}
            style={inputStyle}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field name="quantity">
        <Form.Label style={{ fontWeight: 500, marginBottom: 4 }}>Quantity</Form.Label>
        <Form.Control asChild>
          <input
            type="number"
            placeholder="e.g. 1"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            required
            min={1}
            style={inputStyle}
          />
        </Form.Control>
      </Form.Field>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Form.Field name="date" style={{ flex: 1 }}>
          <Form.Label style={{ fontWeight: 500, marginBottom: 4 }}>Date</Form.Label>
          <Form.Control asChild>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              required
              placeholder={getCurrentDate()}
              style={inputStyle}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="time" style={{ flex: 1 }}>
          <Form.Label style={{ fontWeight: 500, marginBottom: 4 }}>Time</Form.Label>
          <Form.Control asChild>
            <input
              type="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              required
              placeholder={getCurrentTime()}
              style={inputStyle}
            />
          </Form.Control>
        </Form.Field>
      </div>
      <Form.Field name="notes">
        <Form.Label style={{ fontWeight: 500, marginBottom: 4 }}>Notes (optional)</Form.Label>
        <Form.Control asChild>
          <input
            type="text"
            placeholder="Any notes?"
            value={notes}
            onChange={e => setNotes(e.target.value)}
            style={inputStyle}
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button
          type="submit"
          style={inputStyle}
        >
          Add Entry
        </button>
      </Form.Submit>
    </Form.Root>
  )
}