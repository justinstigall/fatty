import { useState } from 'react'
import './App.css'
import { FoodDiaryList } from './components/FoodDiaryList'
import { TopBar } from './components/TopBar'
import { Body } from './components/Body'
import { FoodDiaryForm } from './components/FoodDiaryForm'
import type { FoodDiaryEntry } from './types'

function App() {
  const [diaryEntries, setDiaryEntries] = useState<FoodDiaryEntry[]>([
    {
      id: '1',
      food: { id: 'a', name: 'Apple', calories: 95 },
      quantity: 1,
      date: '2025-07-13',
      notes: 'Fresh and crisp'
    },
    {
      id: '2',
      food: { id: 'b', name: 'Chicken Breast', calories: 165, protein: 31 },
      quantity: 2,
      date: '2025-07-12'
    }
  ])

  function handleAddEntry(entry: FoodDiaryEntry) {
    setDiaryEntries([entry, ...diaryEntries])
  }

  return (
    <>
      <TopBar />
      <Body>
        <FoodDiaryForm onAdd={handleAddEntry} />
        <FoodDiaryList entries={diaryEntries} />
      </Body>
    </>
  )
}

export default App
